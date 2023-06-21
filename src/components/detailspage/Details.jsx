import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Typography, Box, Button, Container,
} from '@mui/material';
import { ArrowCircleRightOutlined, CallEndSharp } from '@mui/icons-material';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import Rating from './Rating';
import PriceTable from './PriceTable';
import { getRoomDetails } from '../../redux/detailsPage/detailsSlice';
import { useGetRoomDetailQuery } from '../../services/apiService';
import {
  roomName,
  detailsBox,
  reservationprice,
  rightBox,
  ratingBox,
  revervationBtn,
  discoverBtn,
  arrow,
  aprLeft,
  mainBox,
} from './styles';

const Details = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { roomId } = useParams();
  const { data } = useGetRoomDetailQuery(roomId);

  const handleReservationClick = () => {
    navigate(`/newreservepage/${roomId}`);
  };

  useEffect(() => {
    if (data) dispatch(getRoomDetails(data));
  }, [data, dispatch]);

  const { roomDetails } = useSelector((state) => state.details);
  return (
    <Box sx={mainBox}>
      <Container sx={detailsBox}>
        <img
          className="roomImg"
          src={roomDetails.image_url}
          alt="interior of the suite"
        />

        <Box sx={rightBox}>
          <Box
            sx={{
              width: '90%',
            }}
          >
            <Box>
              <Typography variant="h3" sx={roomName}>
                {roomDetails.name}
              </Typography>
              <Typography variant="h6" sx={reservationprice}>
                Full Price $
                {roomDetails.full_price}
              </Typography>
              <PriceTable />
              <Typography sx={aprLeft} varient="h5">
                5.9% APR
                {'  '}
                <span className="details-span">Representative</span>
              </Typography>
            </Box>
          </Box>
          <Box sx={ratingBox}>
            <Link to="/mainpage" className="discoverLink">
              <Typography variant="p" sx={discoverBtn}>
                Discover More Rooms
              </Typography>
              <ArrowCircleRightOutlined sx={arrow} />
            </Link>
            <Rating rating={roomDetails.rating} />
            <Button
              variant="contained"
              color="secondary"
              startIcon={<CallEndSharp />}
              endIcon={<ArrowCircleRightOutlined />}
              sx={revervationBtn}
              onClick={handleReservationClick}
            >
              Book Now
            </Button>
          </Box>
        </Box>
      </Container>
      <button
        type="button"
        className="carousel-button-left back-btn"
        onClick={() => navigate(-1)}
      >
        <ArrowLeftOutlinedIcon />
      </button>
    </Box>
  );
};

export default Details;
