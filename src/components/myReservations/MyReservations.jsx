import React from 'react';
import { useSelector } from 'react-redux';
import {
  Container, Typography, Box, useMediaQuery, useTheme, Button,
} from '@mui/material';
import NavigationPanel from '../navigation/navigationPanel';

const MyReservations = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { rooms } = useSelector((state) => state.rooms);

  const getTotalPrice = () => {
    let totalPrice = 0;
    rooms.forEach((reservation) => {
      totalPrice += reservation.full_price;
    });
    return totalPrice;
  };

  const handleCancelReservation = (reservationId) => {
    // Handle cancel reservation logic here
    console.log(`Cancel reservation with ID: ${reservationId}`);
  };

  return (
    <>
    <NavigationPanel />
    <Container>
      <Typography variant="h1" component="h1" align="center">
        My Reservations
      </Typography>
      {rooms.map((reservation) => (
        <Box
          key={reservation.id}
          display="flex"
          flexDirection={isMobile ? 'column' : 'row'}
          alignItems={isMobile ? 'center' : 'flex-start'}
          padding={2}
          border="1px solid #ccc"
          margin={2}
        >
          <Box
            display="flex"
            alignItems="center"
            flexGrow={1}
            flexDirection={isMobile ? 'column' : 'row'}
            sx={{gap: '20px'}}
          >
            <img src={reservation.image} alt={reservation.roomName} style={{ width: isMobile ? '150px' : '200px', height: isMobile ? '150px' : '150px', borderRadius: '50%' }} />
            <Box marginLeft={isMobile ? 2 : 0} marginTop={isMobile ? 0 : 2}>
              <Typography variant="h4" component="h4">
                {reservation.name}
              </Typography>
              <Typography variant="h5" component="h5">
                {reservation.name}
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection= 'column'
            justifyContent={isMobile ? 'center' : 'flex-end'}
            alignItems={isMobile ? 'center' : 'flex-end'}
            flexGrow={1}
            marginTop={isMobile ? 2 : 7}
            marginLeft={isMobile ? 0 : 2}
            sx={{gap: '10px'}}
          >
              <Typography variant="body1">
                Reservation Dates: date here
                {/* {reservation.startDate} - {reservation.endDate} */}
              </Typography>
              <Typography variant="body1" style={{ marginTop: isMobile ? 1 : 0 }}>
                Price Paid: $
                {reservation.full_price}
              </Typography>
            </Box>
        </Box>
      ))}
      <Box textAlign="center" marginTop={2}>
        <Typography variant="h5" component="h5">
          Total Price: $
          {getTotalPrice()}
        </Typography>
      </Box>
    </Container>
    </>
  );
};

export default MyReservations;
