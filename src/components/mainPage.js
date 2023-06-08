import { Box, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

const MainPage = () => {
  const { rooms, status } = useSelector((state) => state.rooms);
  console.log(status);
  console.log(rooms);
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        padding: { xs: '5% 0 0 0', sm: '0' },
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Button
        sx={{
          background: '#96bf01',
          '&:hover': { background: '#96bf01' },
          borderRadius: 'none',
          borderTopRightRadius: '50px',
          borderBottomRightRadius: '50px',
        }}
      >
        <ArrowLeftOutlinedIcon
          color="primary"
          sx={{
            fontSize: { xs: '1.2rem', md: '2rem' },
            padding: { xs: '0.5rem 0', md: '0.5rem 1.5rem' },
          }}
        />
      </Button>

      <Box
        className="main-page-container"
        sx={{
          border: 'solid 1px red',
          height: { xs: '60%', sm: '80%' },
          width: '90%',
        }}
      >
        Will have content
      </Box>

      <Button
        sx={{
          background: '#96bf01',
          '&:hover': { background: '#96bf01' },
          borderRadius: 'none',
          borderTopLeftRadius: '50px',
          borderBottomLeftRadius: '50px',
        }}
      >
        <ArrowRightOutlinedIcon
          color="primary"
          sx={{
            fontSize: { xs: '1.2rem', md: '2rem' },
            padding: { xs: '0.5rem 0', md: '0.5rem 1.5rem' },
          }}
        />
      </Button>

      {/* <CircularProgress /> */}
    </Box>
  );
};

export default MainPage;
