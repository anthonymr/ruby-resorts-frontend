import { Box, Typography } from '@mui/material';

const ReservePage = () => (
  <Box
    sx={{
      width: { xs: '100%', sm: '80%', md: '90%' },
      height: '100vh',
      padding: { xs: '5% 0 0 0', sm: '0' },
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    }}
  >
    <Typography variant="h2">New Reservation Page</Typography>
  </Box>
);

export default ReservePage;
