import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { detailsTable } from './styles';
import {useGetRoomDetailQuery} from '../../services/apiService';
import { getRoomDetails } from '../../redux/detailsPage/detailsSlice';

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  ' td, th': {
    border: 0,
  },
}));

const PriceTable = () => {

  const { roomDetails } = useSelector((state) => state.details);

  function createData(name, value) {
    return { name, value };
  }
  
  const rows = [
    createData('Price', roomDetails.full_price),
    createData('Transaction fee', roomDetails.reservation_fee),
    createData(
      'Total amount',
      parseFloat(roomDetails.full_price) +
        parseFloat(roomDetails.reservation_fee) +
        parseFloat(roomDetails.reservation_price)
    ),
    createData('Duraiton', 305),
  ];

return (
  <TableContainer component={Paper}>
    <Table sx={detailsTable}>
      <TableBody>
        {rows.map((row) => (
          <StyledTableRow key={row.name}>
            <StyledTableCell component="th" scope="row">
              {row.name}
            </StyledTableCell>
            <StyledTableCell align="right">{row.value}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
};

export default PriceTable;
