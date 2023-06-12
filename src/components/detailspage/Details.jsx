import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { ArrowCircleRightOutlined, CallEndSharp } from '@mui/icons-material';
import Rating from '../components/Rating';
import PriceTable from '../components/PriceTable';

import {
  roomName,
  nav,
  detailsBox,
  reservationprice,
  rightBox,
  ratingBox,
  revervationBtn,
  discoverBtn,
  arrow,
  apr,
  aprLeft,
  aprRight
} from '../styles/styles';

const Details = () => {
  return (
    <Box sx={detailsBox}>
      <Box sx={nav}></Box>
      <img
        className='roomImg'
        src='https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60'
        alt=''
      />
      <Box sx={rightBox}>
        <Typography variant='h3' sx={roomName}>
          Hotal Name
        </Typography>
        <Typography variant='p' sx={reservationprice}>
          This is Deposit price
        </Typography>
        <Box>
          <PriceTable />
          <Box sx={apr}>
          <Typography sx={aprLeft} varient='p'>5.9% APR</Typography>
          <Typography sx={aprRight} varient='p'>Representative</Typography>
          </Box>
          
        </Box>
        <Box sx={ratingBox}>
        <Button variant='text' endIcon={<ArrowCircleRightOutlined sx={arrow}  />} sx={discoverBtn}>Discover More Rooms</Button>
        <Rating rating={3.2} />
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
  );
};

export default Details;
