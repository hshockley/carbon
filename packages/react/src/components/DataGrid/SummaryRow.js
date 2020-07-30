import React, { memo } from 'react';

import SummaryCell from './SummaryCell';
// import { RowRendererProps } from './types';

// type SharedRowRendererProps<R, SR> = Pick<RowRendererProps<R, SR>,
//   | 'viewportColumns'
//   | 'rowIdx'
//   | 'lastFrozenColumnIndex'
// >;

// interface SummaryRowProps<R, SR> extends SharedRowRendererProps<R, SR> {
//   'aria-rowindex': number;
//   row: SR;
//   bottom: number;
// }

function SummaryRow({
  rowIdx,
  lastFrozenColumnIndex,
  row,
  viewportColumns,
  bottom,
  'aria-rowindex': ariaRowIndex,
}) {
  return (
    <div
      role="row"
      aria-rowindex={ariaRowIndex}
      className={`rdg-row rdg-row-${
        rowIdx % 2 === 0 ? 'even' : 'odd'
      } rdg-summary-row`}
      style={{ bottom }}>
      {viewportColumns.map(column => (
        <SummaryCell
          key={column.key}
          column={column}
          lastFrozenColumnIndex={lastFrozenColumnIndex}
          row={row}
        />
      ))}
    </div>
  );
}

export default memo(SummaryRow);
