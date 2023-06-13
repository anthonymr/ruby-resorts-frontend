import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Typography, Box, useMediaQuery, useTheme } from '@mui/material';

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

  return (
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
          {isMobile ? (
            <>
              <img src={reservation.image} alt={reservation.name} style={{ width: '200px', height: '150px', borderRadius: '50%' }} />
              <Box textAlign="center" marginTop={2}>
                <Typography variant="h4" component="h4">
                  {reservation.name}
                </Typography>
                <Typography variant="h5" component="h5">
                  {reservation.name}
                </Typography>
                <Typography variant="body1">
                  Reservation Dates: date here
                  {/* {reservation.startDate} - {reservation.endDate} */}
                </Typography>
                <Typography variant="body1">Price Paid: ${reservation.full_price}</Typography>
              </Box>
            </>
          ) : (
            <>
              <Box  display="flex" alignItems="center">
                <img src={reservation.image} alt={reservation.roomName} style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
                <Box marginLeft={2}>
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
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                flexGrow={1}
                marginTop={7}
                marginLeft={2}
              >
                <Typography variant="body1">
                  Reservation Dates: date here
                  {/* {reservation.startDate} - {reservation.endDate} */}
                </Typography>
                <Typography variant="body1">Price Paid: ${reservation.full_price}</Typography>
              </Box>
            </>
          )}
        </Box>
      ))}
      <Box textAlign="center" marginTop={2}>
        <Typography variant="h5" component="h5">
          Total Price: ${getTotalPrice()}
        </Typography>
      </Box>
    </Container>
  );
};

export default MyReservations;
