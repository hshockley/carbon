import React, { memo } from 'react';
import cx from 'classnames';

// import { CellRendererProps } from './types';

// type SharedCellRendererProps<R, SR> = Pick<CellRendererProps<R, SR>,
//   | 'lastFrozenColumnIndex'
//   | 'column'
// >;

// interface SummaryCellProps<R, SR> extends SharedCellRendererProps<R, SR> {
//   row: SR;
// }

function SummaryCell({ column, lastFrozenColumnIndex, row }) {
  const {
    summaryFormatter: SummaryFormatter,
    width,
    left,
    summaryCellClass,
  } = column;
  const className = cx(
    'rdg-cell',
    {
      'rdg-cell-frozen': column.frozen,
      'rdg-cell-frozen-last': column.idx === lastFrozenColumnIndex,
    },
    typeof summaryCellClass === 'function'
      ? summaryCellClass(row)
      : summaryCellClass
  );

  return (
    <div
      role="gridcell"
      aria-colindex={column.idx + 1}
      className={className}
      style={{ width, left }}>
      {SummaryFormatter && <SummaryFormatter column={column} row={row} />}
    </div>
  );
}

export default memo(SummaryCell);
