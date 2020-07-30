import React, { forwardRef, memo, useRef } from 'react';
import cx from 'classnames';

import { EditorContainer, EditorPortal } from './editors';
// import { CellRendererProps } from './types';
import { wrapEvent } from './utils';
import { useCombinedRefs } from './hooks';

function Cell(
  {
    className,
    column,
    isCopied,
    isDraggedOver,
    isRowSelected,
    lastFrozenColumnIndex,
    row,
    rowIdx,
    eventBus,
    selectedCellProps,
    onRowClick,
    onKeyDown,
    onClick,
    onDoubleClick,
    onContextMenu,
    ...props
  },
  ref
) {
  const cellRef = useRef(null);
  const isSelected = selectedCellProps !== undefined;
  const isEditing = selectedCellProps?.mode === 'EDIT';

  const { cellClass } = column;
  className = cx(
    'rdg-cell',
    {
      'rdg-cell-frozen': column.frozen,
      'rdg-cell-frozen-last': column.idx === lastFrozenColumnIndex,
      'rdg-cell-selected': isSelected,
      'rdg-cell-copied': isCopied,
      'rdg-cell-dragged-over': isDraggedOver,
    },
    typeof cellClass === 'function' ? cellClass(row) : cellClass,
    className
  );

  function selectCell(openEditor) {
    eventBus.dispatch('SELECT_CELL', { idx: column.idx, rowIdx }, openEditor);
  }

  function handleClick() {
    selectCell();
    onRowClick?.(rowIdx, row, column);
  }

  function handleContextMenu() {
    selectCell();
  }

  function handleDoubleClick() {
    selectCell(true);
  }

  function onRowSelectionChange(checked, isShiftClick) {
    eventBus.dispatch('SELECT_ROW', { rowIdx, checked, isShiftClick });
  }

  function getCellContent() {
    if (selectedCellProps && selectedCellProps.mode === 'EDIT') {
      const {
        editorPortalTarget,
        ...editorProps
      } = selectedCellProps.editorContainerProps;
      const { scrollTop: docTop, scrollLeft: docLeft } =
        document.scrollingElement || document.documentElement;
      const { left, top } = cellRef.current.getBoundingClientRect(); //may need to reassess this
      const gridLeft = left + docLeft;
      const gridTop = top + docTop;

      return (
        <EditorPortal target={editorPortalTarget}>
          <EditorContainer
            {...editorProps}
            rowIdx={rowIdx}
            row={row}
            column={column}
            left={gridLeft}
            top={gridTop}
          />
        </EditorPortal>
      );
    }

    return (
      <>
        <column.formatter
          column={column}
          rowIdx={rowIdx}
          row={row}
          isRowSelected={isRowSelected}
          onRowSelectionChange={onRowSelectionChange}
        />
        {selectedCellProps?.dragHandleProps && (
          <div
            className="rdg-cell-drag-handle"
            {...selectedCellProps.dragHandleProps}
          />
        )}
      </>
    );
  }

  return (
    <div
      role="gridcell"
      aria-colindex={column.idx + 1} // aria-colindex is 1-based
      aria-selected={isSelected}
      ref={useCombinedRefs(cellRef, ref)}
      className={className}
      style={{
        width: column.width,
        left: column.left,
      }}
      onKeyDown={
        selectedCellProps
          ? wrapEvent(selectedCellProps.onKeyDown, onKeyDown)
          : onKeyDown
      }
      onClick={isEditing ? onClick : wrapEvent(handleClick, onClick)}
      onDoubleClick={
        isEditing ? onDoubleClick : wrapEvent(handleDoubleClick, onDoubleClick)
      }
      onContextMenu={
        isEditing ? onContextMenu : wrapEvent(handleContextMenu, onContextMenu)
      }
      {...props}>
      {getCellContent()}
    </div>
  );
}

export default memo(forwardRef(Cell));
