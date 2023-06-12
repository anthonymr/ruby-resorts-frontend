import { Box, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../redux/login/userSlice';

const LogoutPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logout());
  });

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
      <Typography variant="h4" color="text.fourth">
        Thank you for your stay!!!
      </Typography>
      <Typography variant="h6" color="text.fourth" sx={{ margin: '2rem' }}>
        Would you like to
        <Link to="/"> Login Again?</Link>
      </Typography>
    </Box>
  );
};

export default LogoutPage;
