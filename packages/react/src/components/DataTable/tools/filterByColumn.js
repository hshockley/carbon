import { getCellId } from './cells';

export const defaultFilterRowsByColumn = ({ rowIds, headers, cellsById, inputValue }) =>
  rowIds.filter(rowId =>
    headers.some(({ key }) => {
      const id = getCellId(rowId, key);
      if (typeof cellsById[id].value === 'boolean') return false;
      return ('' + cellsById[id].value)
        .toLowerCase()
        .includes(inputValue.toLowerCase());
    })
  );
