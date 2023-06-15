import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetRoomsListQuery, useDeleteRoomQuery } from '../../services/apiService';
import { getRoomsList } from '../../redux/mainPage/roomsSlice';
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

const DeleteRoom = () => {
  const { data: rooms, refetch } = useGetRoomsListQuery();
  const deleteRoom = useDeleteRoomQuery();

  const dispatch = useDispatch();

  useEffect(() => {
    if (rooms) {
      dispatch(getRoomsList(rooms));
    }
  }, [rooms, dispatch]);

  const { rooms: roomList } = useSelector((state) => state.rooms);

  const handleDelete = async (roomId) => {
    try {
      await deleteRoom.query(roomId);
      refetch();
    } catch (error) {
      console.error('Error deleting room:', error);
    }
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
            {roomList.map((room) => (
              <TableRow key={room.id}>
                <TableCell>{room.name}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDelete(room.id)}
                  >
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
