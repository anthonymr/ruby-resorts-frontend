import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, Box, Button } from '@mui/material';
import { ArrowCircleRightOutlined, CallEndSharp } from '@mui/icons-material';
import Rating from './Rating';
import PriceTable from './PriceTable';
import NavigationPanel from '../navigation/navigationPanel';

import {
  roomName,
  detailsBox,
  reservationprice,
  rightBox,
  ratingBox,
  revervationBtn,
  discoverBtn,
  arrow,
  apr,
  aprLeft,
  aprRight,
} from './styles';

const Details = () => {
  const {rooms} = useSelector((state) => state.rooms);
  let room = rooms[0]
  return (
    <>
    <NavigationPanel />
    <Box sx={detailsBox}>
      <img
        className='roomImg'
        src= {room.image}
        alt=''
      />
      <Box sx={rightBox}>
        <Typography variant='h3' sx={roomName}>
          {room.name}
        </Typography>
        <Typography variant='p' sx={reservationprice}>
          Reservation Price ${room.reservation_price}
        </Typography>
        <Box>
          <PriceTable />
          <Box sx={apr}>
            <Typography sx={aprLeft} varient='p'>
              5.9% APR
            </Typography>
            <Typography sx={aprRight} varient='p'>
              Representative
            </Typography>
          </Box>
        </Box>
        <Box sx={ratingBox}>
          <Button
            variant='text'
            endIcon={<ArrowCircleRightOutlined sx={arrow} />}
            sx={discoverBtn}
          >
            Discover More Rooms
          </Button>
          <Rating rating={room.rating} />
          <Button
            variant='contained'
            startIcon={<CallEndSharp />}
            endIcon={<ArrowCircleRightOutlined />}
            sx={revervationBtn}
          >
            Book Now
          </Button>
        </Box>
      </Box>
    </Box>
    </>
  );
};

export default Details;
