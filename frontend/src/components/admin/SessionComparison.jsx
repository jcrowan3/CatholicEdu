import { useEffect, useState } from 'react';
import { loadDefaultSessions } from '../../data/gradeLoader.js';
import { compareSessionFields, comparisonLabel, comparisonText } from '../../utils/sessionComparison.js';

const panelStyle = {
  border: '1px solid var(--border-default)', borderRadius: 10,
  background: 'var(--surface-card)', padding: 12, marginTop: 16,
  color: 'var(--text-primary)', fontSize: 13,
};
const columnsStyle = {
  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 12,
};
const textStyle = { whiteSpace: 'pre-wrap', overflowWrap: 'anywhere', margin: '6px 0 12px' };

function SessionReferences({ session, label }) {
  return <div>
    <h4 style={{ margin: '8px 0' }}>{label}</h4>
    <strong>CCC reference</strong>
    <p style={textStyle}>{typeof session.ccc === 'string' && session.ccc.trim() ? session.ccc : 'Unavailable'}</p>
    <strong>Scripture text / reference</strong>
    <p style={textStyle}>{typeof session.verse === 'string' && session.verse.trim() ? session.verse : 'Unavailable'}</p>
  </div>;
}

export default function SessionComparison({ grade, draft }) {
  const [source, setSource] = useState(null);
  useEffect(() => {
    let active = true;
    loadDefaultSessions(grade).then(sessions => {
      if (active) setSource({ grade, sessions });
    }).catch(() => {
      if (active) setSource({ grade, sessions: [] });
    });
    return () => { active = false; };
  }, [grade]);
  const loading = !source || source.grade !== grade;
  const original = loading ? null : source.sessions.find(session => session.week === draft.week);
  const changes = compareSessionFields(original, draft);

  return <details style={panelStyle}>
    <summary style={{ cursor: 'pointer', fontWeight: 700, padding: '4px 0' }}>Adaptation summary</summary>
    <section aria-label="Adaptation summary" style={{ marginTop: 12 }}>
      <p>Bundled original → current draft (including unsaved edits). This is not a comparison with your last save.</p>
      <p>This comparison does not approve content or verify sources. Use the existing review workflow and qualified human review.</p>
      {loading ? <p role="status">Loading bundled original…</p>
        : !original ? <p role="status">Bundled original unavailable. Changes cannot be compared; your draft is unchanged.</p>
          : <>
            {changes.length === 0 ? <p role="status">No changes from the bundled original.</p> : <>
              <p role="status">{changes.length} changed fields. List items are compared by position; removing or reordering an item can shift later positions.</p>
              <h3 style={{ fontSize: 15 }}>Existing session-level references</h3>
              <p>Context only, not evidence for each changed field. Inline citations, if present, remain in the text below; none are inferred or verified.</p>
              <div style={columnsStyle}>
                <SessionReferences session={original} label="Original references" />
                <SessionReferences session={draft} label="Draft references" />
              </div>
              <ol style={{ padding: 0, listStyle: 'none' }}>
                {changes.map(change => <li key={change.path} data-field={change.path} style={{ borderTop: '1px solid var(--border-default)', padding: '12px 0' }}>
                  <h3 style={{ fontSize: 14, margin: '0 0 8px', overflowWrap: 'anywhere' }}>{comparisonLabel(change.path)} — {change.kind}</h3>
                  <div style={columnsStyle}>
                    <div><strong>Before — bundled original</strong><p data-version="before" style={textStyle}>{comparisonText(change.before)}</p></div>
                    <div><strong>After — current draft</strong><p data-version="after" style={textStyle}>{comparisonText(change.after)}</p></div>
                  </div>
                  <p style={{ margin: 0 }}>Field-specific reference mapping unavailable.</p>
                </li>)}
              </ol>
            </>}
          </>}
    </section>
  </details>;
}
