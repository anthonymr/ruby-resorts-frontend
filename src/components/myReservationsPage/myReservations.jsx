import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Typography, Box, Divider, CircularProgress,
} from '@mui/material';
import dayjs from 'dayjs';
import { useGetReservationListQuery } from '../../services/apiService';
import { getReservationsList } from '../../redux/myReservationsPage/reservationsSlice';

const MyReservations = () => {
  const { reservations, status } = useSelector((state) => state.reservations);
  const { authStatus } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (authStatus !== 'loggedin') {
      navigate('/');
    }
  }, [navigate, authStatus]);

  const dispatch = useDispatch();
  const { data, refetch } = useGetReservationListQuery('reservationsList');
  useEffect(() => {
    refetch();
    if (data) dispatch(getReservationsList(data));
  }, [data, dispatch, refetch]);

  const isEmpty = reservations.length === 0;

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
        height: '100vh',
        margin: '0 auto',
        padding: { xs: '15% 0', sm: '0' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: { xs: 'start', md: 'center' },
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
        YOUR BOOKINGS
      </Typography>
      <Box
        sx={{
          overflowY: 'scroll',
          margin: '0 auto',
          height: { xs: '85vh', md: '50vh' },
          width: '90%',
        }}
      >
        <Box
          sx={{
            width: '90%',
          }}
        >
          {isEmpty && (
            <Typography variant="h5" color="text.fourth" fontWeight={700}>
              You have no previous Bookings with us. Please head to &quot;Book
              Now&quot; to book your first stay with us.
            </Typography>
          )}
          {reservations.map((reservation) => (
            <Box key={reservation.id}>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: '1fr',
                    md: '1fr 1fr',
                    lg: '0.7fr 1.3fr 1.5fr 0.5fr',
                    gap: { xs: '0.5rem', md: '2rem' },
                    padding: '1rem 0',
                  },
                }}
              >
                <Typography
                  variant="h6"
                  color="text.second"
                  fontWeight={700}
                  sx={{
                    textAlign: { xs: 'center', md: 'left' },
                    padding: '0.5rem',
                  }}
                >
                  {`${reservation.room.name} Suite`}
                </Typography>
                <Typography
                  variant="h6"
                  color="text.second"
                  fontWeight={700}
                  sx={{
                    textAlign: { xs: 'center', md: 'left' },
                    padding: '0.5rem',
                  }}
                >
                  {`@ ${reservation.hotel.name}, ${reservation.hotel.city}`}
                </Typography>
                <Typography
                  variant="h6"
                  color="text.fourth"
                  fontWeight={700}
                  sx={{
                    textAlign: { xs: 'center', md: 'left' },
                    padding: '0.5rem',
                  }}
                >
                  {`${dayjs(reservation.start_date).format(
                    'DD-MMM-YYYY',
                  )} to ${dayjs(reservation.end_date).format('DD-MMM-YYYY')}`}
                </Typography>
                <Typography
                  variant="h6"
                  color="text.fourth"
                  fontWeight={800}
                  sx={{
                    textAlign: { xs: 'center', md: 'left' },
                    padding: '0.5rem',
                  }}
                >
                  {`Price: € ${reservation.amount}`}
                </Typography>
              </Box>
              <Divider
                sx={{
                  borderBottom: '1px dashed #a1a1a1 ',
                  width: { xs: '70%', md: '100%' },
                  margin: '0 auto',
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default MyReservations;
