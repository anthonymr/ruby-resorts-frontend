import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { detailsTable } from './styles';

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  ' td, th': {
    border: 0,
  },
}));

function createData(name, price) {
  return { name, price };
}

const rows = [
  createData('Price', 100),
  createData('Transaction fee', 237),
  createData('Total amount', 262),
  createData('Duraiton', 305),
];

const PriceTable = () => (
  <TableContainer component={Paper}>
    <Table sx={detailsTable}>
      <TableBody>
        {rows.map((row) => (
          <StyledTableRow key={row.name}>
            <StyledTableCell component="th" scope="row">
              {row.name}
            </StyledTableCell>
            <StyledTableCell align="right">{row.price}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default PriceTable;
