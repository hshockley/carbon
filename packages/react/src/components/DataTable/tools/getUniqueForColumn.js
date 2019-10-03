import { getCellId } from './cells';

export const getUniqueValues = ({ rowIds, key, cellsById }) => {
  const uniqueValues = [];
  const map = new Map();

  for (const rowId of rowIds) {
    const id = getCellId(rowId, key);
    if (!map.has(cellsById[id].value)) {
      map.set(cellsById[id].value, true);
      uniqueValues.push({
        key: key,
        value: cellsById[id].value,
      });
    }
  }
  return uniqueValues;
};
