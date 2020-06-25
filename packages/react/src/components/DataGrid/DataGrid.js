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
  TableHeader,
  TableRow,
} from '../DataTable';

// import { Pagination } from '../Pagination';

// const { prefix } = settings;

const DataGrid = ({ rows, headers }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <TableContainer title="DataTable" description="With default options">
        <Table>
          <TableHead>
            <TableRow>
              {headers.map(header => (
                <TableHeader>{header.header}</TableHeader>
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
  rows: PropTypes.string,
  headers: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,

  enableSort: PropTypes.bool,
  enableSearch: PropTypes.bool,
  enablePagination: PropTypes.bool,
  enableRowExpansion: PropTypes.bool,
  i18n: PropTypes.shape({
    placeholder: PropTypes.string,
  }),
};

export default DataGrid;
