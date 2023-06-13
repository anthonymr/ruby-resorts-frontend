import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Typography,
  Container,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { deleteRoom } from '../../redux/detailsPage/detailsSlice';

const DeleteRoom = () => {
  const { rooms } = useSelector((state) => state.rooms);
  const dispatch = useDispatch();

  const handleDelete = (room) => {
    dispatch(deleteRoom(room));
  };

  return (
    <Container>
      <Typography variant="h1" component="h1" sx={{ textAlign: 'center', marginBottom: '20px' }}>
        Ruby Resorts
      </Typography>
      <Typography variant="h6" component="h6" sx={{ textAlign: 'center', marginBottom: '20px' }}>
        Delete the Rooms
      </Typography>
      <TableContainer component={Paper} sx={{ margin: '0 auto', maxWidth: 600 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Room Name</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rooms.map((room) => (
              <TableRow key={room.id}>
                <TableCell>{room.name}</TableCell>
                <TableCell>
                  <Button variant="contained" color="secondary" onClick={() => handleDelete(room)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default DeleteRoom;
