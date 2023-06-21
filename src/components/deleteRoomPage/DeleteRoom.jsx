import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  CircularProgress,
} from '@mui/material';
import { useDeleteRoomMutation } from '../../services/apiService';
import { deleteFromList } from '../../redux/mainPage/roomsSlice';
import ConfirmationDialog from '../confirmationDialog';

const DeleteRoom = () => {
  const { rooms, status } = useSelector((state) => state.rooms);
  const [roomId, setRoomId] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [deleteRoom, response] = useDeleteRoomMutation('delteRoom');

  const { authStatus } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (authStatus !== 'loggedin') {
      navigate('/');
    }
  }, [navigate, authStatus]);

  const confirmation = 'Are you sure you want to delete?';
  const handleOk = () => {
    deleteRoom(roomId);
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (response.isSuccess) dispatch(deleteFromList(roomId));
  }, [dispatch, response]);

  const handleDelete = (roomId) => {
    setRoomId(roomId);
    setIsOpen(true);
  };

  if (status === 'loading') {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          margin: '25% auto',
        }}
      >
        <CircularProgress color="secondary" />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: {
          xs: '100%',
          sm: '80%',
          md: '85%',
          lg: '88%',
        },
        minHeight: '100vh',
        margin: '0 auto',
        padding: { xs: '25% 0 0', sm: '0' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: { xs: 'start', sm: 'center' },
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Typography
        variant="h4"
        fontWeight={900}
        color="black"
        letterSpacing="3px"
        sx={{ margin: '2rem' }}
      >
        DELETE A SUITE
      </Typography>
      <TableContainer
        component={Paper}
        sx={{ margin: '0 auto', maxWidth: 600 }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                }}
                align="center"
              >
                Suite
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontSize: '1.2rem', fontWeight: 700 }}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rooms.map((room) => (
              <TableRow key={room.id}>
                <TableCell
                  align="center"
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'text.third',
                  }}
                >
                  {room.name}
                </TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{ color: '#ffffff', fontWeight: 700 }}
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
      <ConfirmationDialog
        ctext={confirmation}
        isOpen={isOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
      {response.isSuccess && (
        <Typography
          variant="h6"
          fontWeight={700}
          color="text.fourth"
          sx={{ margin: '1rem' }}
        >
          Suite deleted successfully!!
        </Typography>
      )}

      {response.isError && (
        <Typography
          variant="h6"
          fontWeight={700}
          color="text.error"
          sx={{ margin: '1rem' }}
        >
          Error deleting the Suite. Try again later
        </Typography>
      )}
    </Box>
  );
};

export default DeleteRoom;
