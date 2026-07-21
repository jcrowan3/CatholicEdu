# AI Content Provenance Audit

Audit date: 2026-07-21

## Scope

This audit covers the bundled curriculum shipped in `frontend/src/data/grade[2-8].js` and the family-facing surfaces that reproduce or summarize that curriculum:

- Landing page curriculum overview
- In-app family take-home summaries
- Printable session PDF exports

The app does not generate new curriculum text at runtime. Parish overrides created by catechists are user-authored records stored separately by the backend.

## Transparency Position

EU AI Act Article 50 transparency obligations apply from 2026-08-02. The European Commission's 2026-07-20 guidance says providers and deployers must inform people about direct AI interactions and certain AI-generated or manipulated content. It also says content generated before 2026-08-02 does not need retroactive labelling, while voluntary labelling is encouraged.

Sources:

- https://digital-strategy.ec.europa.eu/en/library/guidelines-transparency-obligations-providers-and-deployers-ai-systems
- https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act

For this toolkit, the practical risk is not direct AI interaction; it is user trust in bundled religious education content. The repo now keeps a machine-checkable provenance manifest and displays a plain-language disclosure wherever families first encounter or export the bundled curriculum.

## Disclosure Text

The canonical disclosure lives in `frontend/src/data/contentProvenance.js`:

> Curriculum text may include AI-assisted drafting and is reviewed before use. Scripture quotations use CPDV; CCC paragraph references point families to official teaching.

## Inventory

| Surface | Path | Status |
| --- | --- | --- |
| Bundled grade curriculum | `frontend/src/data/grade[2-8].js` | Reviewed |
| Family take-home summaries | `frontend/src/components/session/TakeHome.jsx` | Disclosed |
| Session PDF exports | `frontend/src/utils/generateSessionPdf.js` | Disclosed |
| Landing page curriculum overview | `frontend/src/components/landing/LandingPage.jsx` | Disclosed |

## Maintenance

Run the audit check after adding or removing active grade files:

```bash
cd frontend
npm run audit:content
```

If new generated or AI-assisted content surfaces are added, update `CONTENT_PROVENANCE.reviewedSurfaces` and decide whether the canonical disclosure should appear there too.
