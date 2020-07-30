import React, { createElement, memo } from 'react';
import cx from 'classnames';

function FilterRow({
  columns,
  lastFrozenColumnIndex,
  filters,
  onFiltersChange,
}) {
  function onChange(key, value) {
    const newFilters = { ...filters };
    newFilters[key] = value;
    onFiltersChange?.(newFilters);
  }

  return (
    <div role="row" aria-rowindex={2} className="rdg-filter-row">
      {columns.map(column => {
        const { key } = column;

        const className = cx('rdg-cell', {
          'rdg-cell-frozen': column.frozen,
          'rdg-cell-frozen-last': column.idx === lastFrozenColumnIndex,
        });
        const style = {
          width: column.width,
          left: column.left,
        };

        return (
          <div key={key} style={style} className={className}>
            {column.filterRenderer &&
              createElement(column.filterRenderer, {
                column,
                value: filters?.[column.key],
                onChange: value => onChange(key, value),
              })}
          </div>
        );
      })}
    </div>
  );
}

export default memo(FilterRow);
