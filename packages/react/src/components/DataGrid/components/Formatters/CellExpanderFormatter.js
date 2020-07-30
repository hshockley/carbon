import React from 'react';

export function CellExpanderFormatter({ expanded, onCellExpand }) {
  function handleCellExpand(e) {
    e.stopPropagation();
    onCellExpand();
  }

  return (
    <div className="rdg-cell-expand">
      <span onClick={handleCellExpand}>{expanded ? '\u25BC' : '\u25B6'}</span>
    </div>
  );
}
