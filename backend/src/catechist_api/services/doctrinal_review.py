"""Deterministic safety checks for catechist-edited curriculum sessions."""

import re
from typing import Any

CCC_REFERENCE = re.compile(r"\bCCC\s*\d{1,4}(?:\s*[\u2013-]\s*\d{1,4})?\b", re.IGNORECASE)
CCC_FIELD = re.compile(
    r"^(?:CCC\s*)?\d{1,4}(?:\s*[\u2013-]\s*\d{1,4})?"
    r"(?:\s*,\s*\d{1,4}(?:\s*[\u2013-]\s*\d{1,4})?)*$",
    re.IGNORECASE,
)
SCRIPTURE_REFERENCE = re.compile(
    r"\b(?:Genesis|Exodus|Leviticus|Numbers|Deuteronomy|Joshua|Judges|Ruth|Samuel|Kings|"
    r"Chronicles|Ezra|Nehemiah|Tobit|Judith|Esther|Maccabees|Job|Psalms?|Proverbs|"
    r"Ecclesiastes|Song of Songs|Wisdom|Sirach|Isaiah|Jeremiah|Lamentations|Baruch|"
    r"Ezekiel|Daniel|Hosea|Joel|Amos|Obadiah|Jonah|Micah|Nahum|Habakkuk|Zephaniah|"
    r"Haggai|Zechariah|Malachi|Matthew|Mark|Luke|John|Acts|Romans|Corinthians|Galatians|"
    r"Ephesians|Philippians|Colossians|Thessalonians|Timothy|Titus|Philemon|Hebrews|"
    r"James|Peter|Jude|Revelation)\s+\d{1,3}:\d{1,3}(?:[\u2013-]\d{1,3})?\b",
    re.IGNORECASE,
)

WEAKENED_DOCTRINE = (
    (
        re.compile(
            r"\bJesus (?:was|is) (?:only|just) (?:a )?(?:man|teacher|prophet)\b",
            re.IGNORECASE,
        ),
        "Jesus must be presented as true God and true man.",
    ),
    (
        re.compile(
            r"\bEucharist (?:is|was) (?:only|just|merely) (?:a )?symbol\b",
            re.IGNORECASE,
        ),
        "The Eucharist must not be reduced to a symbol; affirm Christ's Real Presence.",
    ),
    (
        re.compile(
            r"\bResurrection (?:is|was) (?:only|just|merely) "
            r"(?:a )?(?:story|symbol|metaphor)\b",
            re.IGNORECASE,
        ),
        "The Resurrection must be taught as a real event, not merely a symbol.",
    ),
    (
        re.compile(
            r"\bsin (?:does not|doesn't) (?:matter|separate us from God)\b",
            re.IGNORECASE,
        ),
        "Revise the statement to preserve the Church's teaching on sin and conversion.",
    ),
)


def _strings(value: Any):
    if isinstance(value, str):
        yield value
    elif isinstance(value, dict):
        for key, child in value.items():
            if key not in {"quiz", "opts", "options"}:
                yield from _strings(child)
    elif isinstance(value, list):
        for child in value:
            yield from _strings(child)


def _selected_quiz_answers(session_data: dict[str, Any]):
    quiz = session_data.get("quiz")
    if not isinstance(quiz, dict):
        return
    questions = quiz.get("questions")
    quiz_items = list(questions) if isinstance(questions, list) else []
    if isinstance(quiz.get("bonus"), dict):
        quiz_items.append(quiz["bonus"])
    for question in quiz_items:
        if not isinstance(question, dict):
            continue
        options = question.get("opts", question.get("options"))
        correct = question.get("correct")
        if (
            isinstance(options, list)
            and isinstance(correct, int)
            and 0 <= correct < len(options)
            and isinstance(options[correct], str)
        ):
            yield options[correct]


def review_session(session_data: dict[str, Any]) -> list[dict[str, str]]:
    """Return a concrete, stable fix checklist for a customized session."""
    text = "\n".join((*_strings(session_data), *_selected_quiz_answers(session_data)))
    findings: list[dict[str, str]] = []

    ccc = session_data.get("ccc")
    if not CCC_REFERENCE.search(text) and not (
        isinstance(ccc, str) and CCC_FIELD.fullmatch(ccc.strip())
    ):
        findings.append(
            {
                "code": "missing_ccc_reference",
                "severity": "error",
                "message": "Add at least one specific Catechism citation (for example, CCC 461).",
            }
        )

    verse = session_data.get("verse")
    if isinstance(verse, str) and verse.strip() and not SCRIPTURE_REFERENCE.search(verse):
        findings.append(
            {
                "code": "unsupported_scripture_paraphrase",
                "severity": "error",
                "message": (
                    "Add a book, chapter, and verse to the Scripture text "
                    "(for example, John 3:16) and verify it against CPDV."
                ),
            }
        )

    for pattern, message in WEAKENED_DOCTRINE:
        if pattern.search(text):
            findings.append(
                {
                    "code": "weakened_doctrine",
                    "severity": "error",
                    "message": message,
                }
            )

    return findings
