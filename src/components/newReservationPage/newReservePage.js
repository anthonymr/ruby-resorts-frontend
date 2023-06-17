import {
  Box, Button, Typography, Divider,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  useGetHotelsListQuery,
  useGetRoomsListQuery,
  useGetUserInfoQuery,
} from '../../services/apiService';
import { addUserInfo } from '../../redux/login/userSlice';
import { getRoomsList } from '../../redux/mainPage/roomsSlice';
import { addHotelList } from '../../redux/newReservePage/citiesSlice';
import ReservationForm from './reservationForm';
import bgImage from '../../styles/images/room1.jpg';
import { ArrowLeftWhiteIcon, MenuAltWhiteIcon } from '../../utilities/icons';

const NewReservePage = () => {
  const { authStatus } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (authStatus !== 'loggedin') {
      navigate('/');
    }
  }, [navigate, authStatus]);

  const dispatch = useDispatch();
  const { data, refetch } = useGetUserInfoQuery('userDetails');
  useEffect(() => {
    refetch();
    if (data) dispatch(addUserInfo(data));
  }, [data, dispatch, refetch]);

  const { data: roomsData = [], refetch: roomsRefetch } = useGetRoomsListQuery('roomsList');
  useEffect(() => {
    roomsRefetch();
    if (roomsData) {
      dispatch(getRoomsList(roomsData));
    }
  }, [roomsData, dispatch, roomsRefetch]);

  const { data: hotelsData = [] } = useGetHotelsListQuery('hotelsList');
  useEffect(() => {
    if (hotelsData) {
      dispatch(addHotelList(hotelsData));
    }
  }, [hotelsData, dispatch]);

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        overflow: 'auto',
        background: `url(${bgImage}) no-repeat center`,
        backgroundSize: { xs: '90% 80%', md: 'auto 80%' },
        boxSizing: 'border-box',
        position: 'relative',
        border: { xs: '0.6rem solid #ffffff', md: '1rem solid #ffffff' },
      }}
    >
      <Button
        sx={{
          border: 'none',
          position: 'absolute',
          left: '1rem',
          top: '1rem',
          padding: '0.5rem 0',
        }}
      >
        <MenuAltWhiteIcon />
      </Button>
      <Link to="/mainpage">
        <Button
          sx={{
            border: 'none',
            position: 'absolute',
            right: '1rem',
            top: '1rem',
            padding: '0.5rem 0',
          }}
        >
          <ArrowLeftWhiteIcon />
        </Button>
      </Link>

      <Box
        sx={{
          width: '100%',
          minHeight: '95vh',
          background: 'rgba(150,190,38,0.9)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: { xs: 'start', md: 'center' },
        }}
      >
        <Box
          sx={{
            marginTop: { xs: '6rem', md: '0' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h6"
            fontWeight="800"
            letterSpacing="4px"
            color="text.first"
            sx={{ width: { xs: '85%' } }}
          >
            BOOK YOUR NEXT STAY WITH US
          </Typography>
          <Divider
            sx={{
              margin: '1rem',
              width: {
                xs: '85%',
                sm: '70%',
                md: '60%',
                xl: '40%',
              },
              borderBottom: '1px #ffffff solid',
            }}
          />
          <Typography
            variant="body1"
            color="text.first"
            sx={{
              width: { xs: '85%', lg: '65%' },
              fontSize: { lg: '1rem' },
            }}
          >
            Experience the very best of Ruby Resorts. From stunning rooftop
            pools to family-friendly water parks, our Resorts offer a variety
            for guests of all ages to enjoy during their stay.
          </Typography>
          <ReservationForm />
        </Box>
      </Box>
    </Box>
  );
};

export default NewReservePage;
