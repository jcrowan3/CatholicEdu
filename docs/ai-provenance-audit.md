# AI Provenance Audit

Last reviewed: 2026-07-21

## Scope

This audit covers user-visible content and export surfaces in Catholic Catechist Toolkit that could be mistaken for AI-generated output or could carry AI-generated source material into a parish workflow.

## Current Posture

The application does not call an AI model at runtime. No OpenAI, LLM, model gateway, prompt, completion, embedding, or image-generation integration is present in the frontend, backend, or Docker configuration as of this review.

Bundled curriculum content lives in `frontend/src/data/grade*.js`. The README states that curriculum content is original and that Scripture uses the Catholic Public Domain Version. Catechists may edit session content through the Session Editor, and reports/PDFs render the resulting saved content without model generation.

## User-Visible Surfaces

| Surface | Source | AI/runtime generation? | Disclosure posture |
| --- | --- | --- | --- |
| Student activity screens | Bundled grade data or catechist session overrides | No | No AI disclosure required for runtime behavior. |
| Family take-home summaries | Existing session fields transformed locally in React | No | Treat as source-derived classroom material. |
| Session PDFs | Existing session fields transformed locally with jsPDF | No | Treat as source-derived classroom material. |
| Standards coverage PDFs | Bundled curriculum metadata transformed into report rows | No | Export includes a source/provenance line. |
| Progress and student CSV exports | Parish/student records and progress entries | No | CSV cells are sanitized before export; no AI disclosure required. |
| Family communication CSV exports | Parish/student permission fields | No | CSV cells are sanitized before export; no AI disclosure required. |

## Controls

- Runtime model calls are absent; keep AI provider SDKs, gateway URLs, prompts, or generation endpoints out of production flows unless they ship with a fresh disclosure review.
- Generated standards coverage PDFs include: `Source: Catholic Catechist Toolkit bundled curriculum; generated without AI model calls.`
- If AI-assisted authoring is later used to draft bundled curriculum, record that provenance in this file before release and add an in-product/content disclosure where legally or pastorally appropriate.
- If the app later adds live AI features, require explicit UI labeling for generated or materially altered content before showing it to catechists, students, or families.

## Follow-Up Triggers

Re-run this audit when adding:

- AI/LLM SDK dependencies, model gateway calls, embeddings, transcription, image generation, or prompt files.
- New export surfaces that summarize, rewrite, or recommend content.
- Bulk curriculum imports from sources with unclear authoring provenance.
