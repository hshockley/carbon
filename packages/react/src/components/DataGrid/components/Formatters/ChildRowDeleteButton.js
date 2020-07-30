import React from 'react';

export function ChildRowDeleteButton({
  onDeleteSubRow,
  isDeleteSubRowEnabled,
}) {
  return (
    <>
      <div className="rdg-child-row-action-cross" />
      {isDeleteSubRowEnabled && (
        <span
          aria-label="delete"
          role="img"
          className="rdg-child-row-btn"
          onClick={onDeleteSubRow}>
          ❌
        </span>
      )}
    </>
  );
}
