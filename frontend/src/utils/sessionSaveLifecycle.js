export function createSessionSaveLifecycle() {
  let activeSave = null;

  return {
    get isSaving() {
      return activeSave !== null;
    },

    save({ draft, persistDraft, review, upsert }) {
      if (activeSave) return activeSave;

      activeSave = (async () => {
        try {
          // Local persistence is deliberately first: review and network failures
          // must never discard the catechist's latest edits.
          persistDraft(draft);

          const reviewResult = await review(draft.session);
          if (!reviewResult.passed) {
            return { status: "review-failed", review: reviewResult };
          }

          await upsert(draft.session);
          return { status: "saved", review: reviewResult };
        } finally {
          activeSave = null;
        }
      })();

      return activeSave;
    },
  };
}
