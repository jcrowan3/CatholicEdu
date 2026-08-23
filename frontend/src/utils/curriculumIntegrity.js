const ACTIVITY_TYPES = ["sort", "timeline", "fillblank"];

function presentString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function validateQuestion(question, path, failures) {
  if (!presentString(question?.q)) failures.push(`${path}.q must be a non-empty string`);
  if (!Array.isArray(question?.opts) || question.opts.length !== 4) {
    failures.push(`${path}.opts must contain exactly four choices`);
    return;
  }
  if (!question.opts.every(presentString)) failures.push(`${path}.opts must contain only non-empty strings`);
  if (!Number.isInteger(question.correct) || question.correct < 0 || question.correct >= question.opts.length) {
    failures.push(`${path}.correct must point to one of the choices`);
  }
}

function validateActivity(session, path, failures) {
  const configured = ACTIVITY_TYPES.filter((type) => session[type]);
  if (!ACTIVITY_TYPES.includes(session.secondary)) {
    failures.push(`${path}.secondary must name a supported activity`);
  }
  if (configured.length !== 1 || configured[0] !== session.secondary) {
    failures.push(`${path} must contain exactly the activity named by secondary`);
    return;
  }

  const activity = session[session.secondary];
  if (!presentString(activity.title) || !presentString(activity.instruction)) {
    failures.push(`${path}.${session.secondary} must include a title and instruction`);
  }

  if (session.secondary === "sort") {
    const groups = activity.groups || [];
    if (!Array.isArray(groups) || groups.length < 2 || new Set(groups).size !== groups.length) {
      failures.push(`${path}.sort.groups must contain at least two unique groups`);
    }
    if (!Array.isArray(activity.items) || activity.items.length < 3) {
      failures.push(`${path}.sort.items must contain at least three cards`);
    } else {
      activity.items.forEach((item, index) => {
        if (!presentString(item.name) || !presentString(item.icon) || !groups.includes(item.group)) {
          failures.push(`${path}.sort.items[${index}] must be placeable in a declared group`);
        }
      });
    }
    groups.forEach((group) => {
      if (!presentString(activity.colors?.[group]) || !presentString(activity.icons?.[group])) {
        failures.push(`${path}.sort group "${group}" must define a color and icon`);
      }
    });
  }

  if (session.secondary === "timeline") {
    const items = activity.items || [];
    if (!Array.isArray(items) || items.length < 3) {
      failures.push(`${path}.timeline.items must contain at least three steps`);
    } else {
      const expected = items.map((_, index) => index + 1);
      const ids = items.map(({ id }) => id);
      const orders = items.map(({ order }) => order).sort((a, b) => a - b);
      if (new Set(ids).size !== items.length || !items.every(({ text }) => presentString(text))) {
        failures.push(`${path}.timeline items must have unique ids and non-empty text`);
      }
      if (JSON.stringify(orders) !== JSON.stringify(expected)) {
        failures.push(`${path}.timeline orders must be consecutive from 1`);
      }
    }
  }

  if (session.secondary === "fillblank") {
    const sentences = activity.sentences || [];
    if (!Array.isArray(sentences) || sentences.length < 3) {
      failures.push(`${path}.fillblank.sentences must contain at least three prompts`);
    } else {
      sentences.forEach((sentence, index) => {
        if (!presentString(sentence.text) || !sentence.text.includes("___")
            || !presentString(sentence.answer) || !sentence.options?.includes(sentence.answer)) {
          failures.push(`${path}.fillblank.sentences[${index}] must have a blank and selectable answer`);
        }
      });
    }
  }
}

export function validateCurriculum(sessions, { expectedCount = 30 } = {}) {
  const failures = [];
  if (!Array.isArray(sessions)) return ["curriculum must be an array"];
  if (sessions.length !== expectedCount) failures.push(`curriculum must contain ${expectedCount} sessions`);

  sessions.forEach((session, index) => {
    const path = `week ${session?.week ?? index + 1}`;
    if (session?.week !== index + 1) failures.push(`${path} is out of sequence`);
    if (!presentString(session?.title) || !presentString(session?.pillar) || !presentString(session?.verse)) {
      failures.push(`${path} must include title, pillar, and verse`);
    }
    if (!presentString(session?.discover?.title) || !presentString(session?.discover?.instruction)
        || !Array.isArray(session?.discover?.items) || session.discover.items.length < 3
        || !session.discover.items.every((item) => presentString(item.icon)
          && presentString(item.name) && presentString(item.desc))) {
      failures.push(`${path}.discover must include instructions and at least three complete cards`);
    }

    validateActivity(session, path, failures);

    if (!Array.isArray(session?.quiz?.questions) || session.quiz.questions.length !== 5) {
      failures.push(`${path}.quiz must contain exactly five questions`);
    } else {
      session.quiz.questions.forEach((question, questionIndex) =>
        validateQuestion(question, `${path}.quiz.questions[${questionIndex}]`, failures));
    }
    validateQuestion(session?.quiz?.bonus, `${path}.quiz.bonus`, failures);
    if (!presentString(session?.quiz?.bonus?.reward)) failures.push(`${path}.quiz.bonus.reward is required`);

    if (!presentString(session?.prayer?.title) || !Array.isArray(session?.prayer?.lines)
        || session.prayer.lines.length < 2 || !session.prayer.lines.every((line) =>
          presentString(line.s) && presentString(line.t))) {
      failures.push(`${path}.prayer must include a title and complete leader/assembly lines`);
    }
  });

  return failures;
}
