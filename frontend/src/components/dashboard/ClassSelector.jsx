import { useState, useEffect } from "react";
import {
  getClasses,
  addClass,
  removeClass,
  setActiveClassId,
} from "../../data/store";
import { useAuth } from "../../context/auth";
import { api } from "../../api/client";


export default function ClassSelector({ grade, classId, onClassChange }) {
  const auth = useAuth();
  const isOnline = auth.isAuthenticated && auth.isOnline;

  const [classes, setClasses] = useState([]);
  const [adding, setAdding] = useState(false);
  const [newName, setNewName] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(null);

  // localStorage is an external data source, so offline mode hydrates state here.
  /* eslint-disable react-hooks/set-state-in-effect -- Synchronizing the local class store after the selected grade changes. */
  useEffect(() => {
    if (!grade) return;
    if (isOnline) {
      api.getClasses(grade)
        .then((data) => {
          const mapped = data.map((c) => ({
            id: c.id,
            name: c.name,
            joinCode: c.join_code,
            studentCount: c.student_count,
          }));
          setClasses(mapped);
          // Auto-select first class if none selected
          if (!classId && mapped.length > 0) {
            onClassChange(mapped[0].id);
          }
        })
        .catch(() => setClasses(getClasses(grade)));
    } else {
      setClasses(getClasses(grade));
    }
  }, [grade, isOnline, classId, onClassChange]);
  /* eslint-enable react-hooks/set-state-in-effect */

  const handleAdd = async () => {
    if (!newName.trim()) return;
    if (isOnline) {
      try {
        const created = await api.createClass(grade, newName.trim());
        const mapped = {
          id: created.id,
          name: created.name,
          joinCode: created.join_code,
          studentCount: 0,
        };
        setClasses((prev) => [...prev, mapped]);
        onClassChange(mapped.id);
      } catch {
        const cls = addClass(grade, newName.trim());
        setClasses(getClasses(grade));
        setActiveClassId(grade, cls.id);
        onClassChange(cls.id);
      }
    } else {
      const cls = addClass(grade, newName.trim());
      setClasses(getClasses(grade));
      setActiveClassId(grade, cls.id);
      onClassChange(cls.id);
    }
    setNewName("");
    setAdding(false);
  };

  const handleSwitch = (id) => {
    if (!isOnline) setActiveClassId(grade, id);
    onClassChange(id);
  };

  const handleDelete = async (id) => {
    if (isOnline) {
      try {
        await api.deleteClass(grade, id);
        setClasses((prev) => {
          const updated = prev.filter((c) => c.id !== id);
          if (id === classId && updated.length > 0) {
            onClassChange(updated[0].id);
          }
          return updated;
        });
      } catch {
        removeClass(grade, id);
        const updated = getClasses(grade);
        setClasses(updated);
        if (id === classId && updated.length > 0) {
          setActiveClassId(grade, updated[0].id);
          onClassChange(updated[0].id);
        }
      }
    } else {
      removeClass(grade, id);
      const updated = getClasses(grade);
      setClasses(updated);
      setConfirmDelete(null);
      if (id === classId && updated.length > 0) {
        setActiveClassId(grade, updated[0].id);
        onClassChange(updated[0].id);
      }
    }
    setConfirmDelete(null);
  };

  return (
    <div style={{ marginBottom: 16 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          marginBottom: 8,
        }}
      >
        <span
          style={{
            color: "var(--text-muted)",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 1,
          }}
        >
          CLASS
        </span>
        {!adding && (
          <button
            onClick={() => setAdding(true)}
            style={{
              background: "var(--surface-input)",
              border: "1px solid var(--border-medium)",
              borderRadius: 6,
              padding: "2px 8px",
              color: "var(--accent-green)",
              fontSize: 10,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            + New
          </button>
        )}
      </div>

      {/* Class tabs */}
      <div
        style={{
          display: "flex",
          gap: 6,
          flexWrap: "wrap",
          marginBottom: adding ? 10 : 0,
        }}
      >
        {classes.map((cls) => (
          <div
            key={cls.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <button
              onClick={() => handleSwitch(cls.id)}
              style={{
                padding: "5px 12px",
                borderRadius: 8,
                fontSize: 12,
                fontWeight: 700,
                cursor: "pointer",
                background:
                  cls.id === classId
                    ? "rgba(212,168,67,.15)"
                    : "var(--surface-card)",
                border:
                  cls.id === classId
                    ? "2px solid var(--accent-gold)"
                    : "1px solid var(--border-default)",
                color:
                  cls.id === classId
                    ? "var(--accent-gold)"
                    : "var(--text-faint)",
              }}
            >
              {cls.name}
              {isOnline && cls.joinCode && cls.id === classId && (
                <span
                  style={{
                    marginLeft: 6,
                    fontSize: 9,
                    color: "var(--text-ghost)",
                    fontWeight: 400,
                  }}
                  title="Share this code with students"
                >
                  ({cls.joinCode})
                </span>
              )}
            </button>
            {classes.length > 1 && cls.id === classId && (
              <>
                {confirmDelete === cls.id ? (
                  <div style={{ display: "flex", gap: 3 }}>
                    <button
                      onClick={() => handleDelete(cls.id)}
                      style={{
                        padding: "3px 8px",
                        borderRadius: 5,
                        background: "rgba(217,74,74,.15)",
                        color: "var(--accent-red)",
                        fontSize: 10,
                        fontWeight: 700,
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => setConfirmDelete(null)}
                      style={{
                        padding: "3px 6px",
                        borderRadius: 5,
                        background: "var(--surface-input)",
                        color: "var(--text-ghost)",
                        fontSize: 10,
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setConfirmDelete(cls.id)}
                    style={{
                      padding: "3px 6px",
                      borderRadius: 5,
                      background: "none",
                      color: "var(--text-ghost)",
                      fontSize: 10,
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    x
                  </button>
                )}
              </>
            )}
          </div>
        ))}
      </div>

      {/* Add class form */}
      {adding && (
        <div style={{ display: "flex", gap: 6, animation: "pi .2s ease" }}>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAdd()}
            autoFocus
            placeholder="Class name"
            style={{
              flex: 1,
              padding: "6px 10px",
              borderRadius: 6,
              border: "1px solid var(--border-strong)",
              background: "var(--surface-input)",
              color: "var(--text-primary)",
              fontSize: 12,
              fontFamily: "inherit",
              outline: "none",
            }}
          />
          <button
            onClick={handleAdd}
            style={{
              padding: "6px 12px",
              borderRadius: 6,
              background: "var(--accent-green)",
              color: "#fff",
              fontSize: 11,
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
            }}
          >
            Add
          </button>
          <button
            onClick={() => {
              setAdding(false);
              setNewName("");
            }}
            style={{
              padding: "6px 8px",
              borderRadius: 6,
              background: "var(--surface-input)",
              color: "var(--text-ghost)",
              fontSize: 11,
              border: "none",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
