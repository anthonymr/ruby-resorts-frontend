import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button, Drawer } from '@mui/material';
import { addUserInfo } from '../../redux/login/userSlice';
import {
  useGetHotelsListQuery,
  useGetRoomsListQuery,
  useGetUserInfoQuery,
} from '../../services/apiService';
import { getRoomsList } from '../../redux/mainPage/roomsSlice';
import { addHotelList } from '../../redux/newReservePage/citiesSlice';
import { MenuAltGreenIcon } from '../../utilities/icons';
import NavigationItems from './navigationItems';

const NavigationPanel = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const handleToggleDrawer = () => {
    setMobileMenu((prevState) => !prevState);
  };

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

  const mobileDrawer = (
    <Box
      onClick={handleToggleDrawer}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <NavigationItems />
    </Box>
  );

  return (
    <>
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          flexDirection: { sm: 'column' },
          width: {
            sm: '20%',
            md: '15%',
            lg: '12%',
          },
          borderRight: 'solid 1px #dcdcdc',
          minHeight: '100vh',
        }}
      >
        <NavigationItems />
      </Box>
      <Button
        onClick={handleToggleDrawer}
        sx={{
          display: { sm: 'none' },
          position: 'absolute',
          left: '1rem',
          top: '1rem',
          zIndex: 99,
        }}
      >
        <MenuAltGreenIcon />
      </Button>
      <Box component="nav">
        <Drawer
          anchor="left"
          variant="temporary"
          open={mobileMenu}
          onClose={handleToggleDrawer}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: '75%',
            },
          }}
        >
          {mobileDrawer}
        </Drawer>
      </Box>
    </>
  );
};

export default NavigationPanel;
