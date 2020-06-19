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

const DataGrid = ({ data, headers }) => {
  return (
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
          {data.map(row => (
            <TableRow>
              {row.cells.map(cell => (
                <TableCell key={cell.id}>{cell.value}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

DataGrid.propTypes = {
  data: PropTypes.string,
  headers: PropTypes.string,
  settings: PropTypes.shape({
    withSort: PropTypes.bool,
    withSearch: PropTypes.bool,
    withPagination: PropTypes.bool,
    withRowExpansion: PropTypes.bool,
  }),
  i18n: PropTypes.shape({
    placeholder: PropTypes.string,
  }),
};

export default DataGrid;
