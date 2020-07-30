import React from 'react';
import { SelectCellFormatter } from './formatters';

// TODO: fix type
export const SelectColumn = {
  key: 'select-row',
  name: '',
  width: 35,
  maxWidth: 35,
  frozen: true,
  headerRenderer(props) {
    return (
      <SelectCellFormatter
        aria-label="Select All"
        value={props.allRowsSelected}
        onChange={props.onAllRowsSelectionChange}
      />
    );
  },
  formatter(props) {
    return (
      <SelectCellFormatter
        aria-label="Select"
        value={props.isRowSelected}
        onChange={props.onRowSelectionChange}
      />
    );
  },
};
