import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
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
  ' td, th': {
    border: 0,
  },
}));

const PriceTable = () => {
  const { roomDetails } = useSelector((state) => state.details);

  function createData(name, value) {
    return { name, value };
  }

  const reservationFee = parseFloat(roomDetails.reservation_fee);
  const reservationPrice = parseFloat(roomDetails.reservation_price);

  const totalAmount = Number.isNaN(reservationFee)
    || Number.isNaN(reservationPrice)
    ? 0
    : reservationFee + reservationPrice;

  const rows = [
    createData('Reservation Price', roomDetails.reservation_price),
    createData('Transaction fee', roomDetails.reservation_fee),
    createData('Total amount', totalAmount),
    createData('Cancelation Fee', '30%'),
  ];

  return (
    <TableContainer>
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
