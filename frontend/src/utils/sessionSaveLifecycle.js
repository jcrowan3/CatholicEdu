export function createSessionSaveLifecycle() {
  let activeSave = null;
  let activeReset = null;
  let generation = 0;

  return {
    get isSaving() {
      return activeSave !== null;
    },

    get isResetting() {
      return activeReset !== null;
    },

    save({ draft, persistDraft, review, upsert }) {
      if (activeSave) return activeSave;
      if (activeReset) {
        return Promise.resolve({ status: "reset-in-progress", review: { findings: [] } });
      }

      const saveGeneration = generation;

      activeSave = (async () => {
        try {
          // Local persistence is deliberately first: review and network failures
          // must never discard the catechist's latest edits.
          persistDraft(draft);

          const reviewResult = await review(draft.session);
          if (saveGeneration !== generation) {
            return { status: "superseded", review: reviewResult };
          }
          if (!reviewResult.passed) {
            return { status: "review-failed", review: reviewResult };
          }

          await upsert(draft.session);
          if (saveGeneration !== generation) {
            return { status: "superseded", review: reviewResult };
          }
          return { status: "saved", review: reviewResult };
        } finally {
          activeSave = null;
        }
      })();

      return activeSave;
    },

    reset(resetSession) {
      if (activeReset) return activeReset;

      // Invalidate the current save immediately, then wait for any remote write
      // already in progress before deleting the override and restoring defaults.
      generation += 1;
      const saveToSettle = activeSave;
      activeReset = (async () => {
        try {
          await saveToSettle?.catch(() => {});
          return await resetSession();
        } finally {
          activeReset = null;
        }
      })();
      return activeReset;
    },
  };
}
