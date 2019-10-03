import { getCellId } from './cells';
import normalize from './normalize';
export const getUniqueValues = ({ rows, headers, key }) => {
  const uniqueValues = [];
  const map = new Map();
  const state = normalize(rows, headers);
  const rowIds = state.rowIds;
  const cellsById = state.cellsById;
  const rowsById = state.rowsById;
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
