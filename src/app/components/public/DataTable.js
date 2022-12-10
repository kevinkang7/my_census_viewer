import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const DataTable = (props) => {
  const { data, header } = props;
  console.log(data);
  return (
    <Paper style={{ paddingLeft: 60, paddingRight: 60 }} elevation={0}>
      <Table size='small'>
        <TableHead>
          <TableRow>
            {header
              ? header.map((cell, index) => (
                  <TableCell key={index}>{cell}</TableCell>
                ))
              : null}
          </TableRow>
        </TableHead>

        <TableBody>
          {data
            ? data.map((record, index) => (
                <TableRow key={index}>
                  {record.map((cell, index) => (
                    <TableCell key={index}>
                      {cell || cell === 0 ? cell.toLocaleString() : 'N/A'}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            : null}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default DataTable;
