import { useState, useRef } from "react";
import ActivityHeader from "../shared/ActivityHeader";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  TouchSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
  DragOverlay,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import DoneButton from "../shared/DoneButton";
import DoneBadge from "../shared/DoneBadge";


/* ─── Grip handle icon (6 dots) ─── */
function GripIcon() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 2,
        width: 12,
        opacity: 0.25,
        flexShrink: 0,
      }}
    >
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          style={{
            width: 4,
            height: 4,
            borderRadius: "50%",
            background: "var(--text-primary)",
          }}
        />
      ))}
    </div>
  );
}

/* ─── Single sortable row ─── */
function SortableItem({ item, index, isCorrect, isSelected, onTap, isDragging }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "12px 14px",
    borderRadius: 10,
    background: isCorrect
      ? "rgba(109,184,123,.12)"
      : isSelected
      ? "rgba(212,168,67,.12)"
      : "var(--surface-card)",
    border: isCorrect
      ? "2px solid rgba(109,184,123,.35)"
      : isSelected
      ? "2px solid #D4A843"
      : "1px solid var(--border-default)",
    animation: isCorrect
      ? "correctPulse .6s ease"
      : `pi .3s ease ${index * 0.05}s both`,
    opacity: isDragging ? 0.4 : 1,
    touchAction: "none",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes}>
      {/* Drag handle */}
      <div {...listeners} style={{ cursor: "grab", padding: "4px 0" }}>
        <GripIcon />
      </div>

      {/* Tap target: number badge + text */}
      <div
        onClick={onTap}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          flex: 1,
          cursor: "pointer",
        }}
      >
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: 7,
            background: isCorrect ? "#6DB87B" : "var(--surface-input)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 12,
            fontWeight: 800,
            color: isCorrect ? "#fff" : "var(--text-ghost)",
            transition: "all .3s ease",
          }}
        >
          {isCorrect ? "✓" : index + 1}
        </div>
        <span style={{ color: "var(--text-primary)", fontSize: 13, fontWeight: 600, flex: 1 }}>
          {item.text}
        </span>
      </div>
    </div>
  );
}

/* ─── Drag overlay item (floating copy) ─── */
function OverlayItem({ item }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "12px 14px",
        borderRadius: 10,
        background: "rgba(212,168,67,.15)",
        border: "2px solid #D4A843",
        boxShadow: "0 8px 24px rgba(0,0,0,.3)",
        transform: "scale(1.03)",
      }}
    >
      <div style={{ padding: "4px 0" }}>
        <GripIcon />
      </div>
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: 7,
          background: "rgba(212,168,67,.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 12,
          fontWeight: 800,
          color: "#D4A843",
        }}
      >
        ⇅
      </div>
      <span style={{ color: "var(--text-primary)", fontSize: 13, fontWeight: 600 }}>
        {item.text}
      </span>
    </div>
  );
}

/* ─── Main Timeline component ─── */
export default function Timeline({ data, earn, isDone, onBack }) {
  const [items, setItems] = useState(() =>
    [...data.items].sort(() => Math.random() - 0.5)
  );
  const [selected, setSelected] = useState(null);
  const [activeId, setActiveId] = useState(null);
  const done = isDone("timeline");
  const wasDragged = useRef(false);

  const solved = items.every((item, idx) => item.order === idx + 1);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 150, tolerance: 5 } }),
    useSensor(KeyboardSensor)
  );

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
    setSelected(null);
    wasDragged.current = true;
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    setActiveId(null);
    if (active && over && active.id !== over.id) {
      setItems((prev) => {
        const oldIdx = prev.findIndex((x) => x.id === active.id);
        const newIdx = prev.findIndex((x) => x.id === over.id);
        return arrayMove(prev, oldIdx, newIdx);
      });
    }
    // Reset drag flag after a tick so onClick doesn't fire
    setTimeout(() => { wasDragged.current = false; }, 50);
  };

  const handleDragCancel = () => {
    setActiveId(null);
    setTimeout(() => { wasDragged.current = false; }, 50);
  };

  // Tap-to-swap fallback
  const tap = (i) => {
    if (wasDragged.current) return;
    if (solved) return;
    if (selected === null) {
      setSelected(i);
      return;
    }
    if (selected === i) {
      setSelected(null);
      return;
    }
    // Swap
    const next = [...items];
    [next[selected], next[i]] = [next[i], next[selected]];
    setItems(next);
    setSelected(null);
  };

  const activeItem = activeId ? items.find((x) => x.id === activeId) : null;

  return (
    <div style={{ animation: "su .4s ease" }}>
      <ActivityHeader title={data.title} instruction={data.instruction} />

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
      >
        <SortableContext
          items={items.map((x) => x.id)}
          strategy={verticalListSortingStrategy}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            {items.map((item, i) => (
              <SortableItem
                key={item.id}
                item={item}
                index={i}
                isCorrect={item.order === i + 1}
                isSelected={selected === i}
                onTap={() => tap(i)}
                isDragging={activeId === item.id}
              />
            ))}
          </div>
        </SortableContext>

        <DragOverlay>
          {activeItem ? <OverlayItem item={activeItem} /> : null}
        </DragOverlay>
      </DndContext>

      {!solved && (
        <p
          style={{
            color: "var(--text-faint)",
            fontSize: 11,
            textAlign: "center",
            marginTop: 10,
          }}
        >
          Drag to reorder, or tap two items to swap
        </p>
      )}

      {solved && !done && (
        <DoneButton
          onClick={() => {
            earn("timeline", 3);
            onBack();
          }}
          text="Perfect Order! +3 ⭐"
        />
      )}
      {done && <DoneBadge />}
    </div>
  );
}
