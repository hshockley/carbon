// import { settings } from '@rocketsoftware/carbon-components';
// import cx from 'classnames';
import PropTypes from 'prop-types';
import React, {
  forwardRef,
  useState,
  useRef,
  useMemo,
  useLayoutEffect,
  useEffect,
  useImperativeHandle,
  useCallback,
  createElement
} from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '../DataTable';

import { DraggableHeader } from './DraggableHeader';

// import { Pagination } from '../Pagination';

// const { prefix } = settings;

const DataGrid = ({ rows, columns }) => {
  
  useEffect(() => {
    console.log("ROWS")
    console.log(rows);
    console.log("COLUMNS");
    console.log(columns)
    console.log("MAPPED")
    console.log(rows.map(row => row.id))
    console.log("TYPE")
    console.log(typeof rows)
  }, [])
  return (
    <DndProvider backend={HTML5Backend}>
      <TableContainer title="DataTable" description="With default options">
        <Table>
          <TableHead>
            <TableRow>
              {columns.map(header => (
                <DraggableHeader>{header.header}</DraggableHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow>
                {row.cells.map(cell => (
                  <TableCell key={cell.id}>{cell.value}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </DndProvider>
  );
};

DataGrid.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
      isSelected: PropTypes.bool,
      isExpanded: PropTypes.bool,
    })
  ).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      header: PropTypes.node.isRequired,
    })
  ).isRequired,
  height: PropTypes.string,
  width: PropTypes.string,

  enableSort: PropTypes.bool,
  enableSearch: PropTypes.bool,
  enablePagination: PropTypes.bool,
  enableRowExpansion: PropTypes.bool,
  i18n: PropTypes.shape({
    placeholder: PropTypes.string,
  }),
};

export default DataGrid;
