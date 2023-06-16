import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CustomCarousel from './customCarousel';

const MainPage = () => {
  const { authStatus } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (authStatus !== 'loggedin') {
      navigate('/');
    }
  }, [navigate, authStatus]);

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
      >
        OUR SUITES
      </Typography>
      <Typography variant="body1" fontWeight={600} color="text.third">
        Please select a Suite
      </Typography>
      <Box
        sx={{
          borderBottom: '2px dotted #a1a1a1',
          width: '10%',
          margin: { md: '1rem 0', xl: '3rem 0' },
        }}
      />
      <div className="main-carousel-container">
        <CustomCarousel />
      </div>
    </Box>
  );
};

export default MainPage;
