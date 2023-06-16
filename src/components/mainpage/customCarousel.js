import { Box, CircularProgress, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { PropTypes } from 'prop-types';
import {
  FacebookIconRound,
  InstagramIconRound,
  TwitterIconRound,
} from '../../utilities/icons';

const responsive = {
  large: {
    breakpoint: { max: 3000, min: 1200 },
    items: 3,
  },
  medium: {
    breakpoint: { max: 1200, min: 900 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 900, min: 0 },
    items: 1,
  },
};

const CustomCarousel = () => {
  const { rooms, status } = useSelector((state) => state.rooms);
  const getStepCount = () => {
    if (window.innerWidth <= 900) {
      return Math.ceil(rooms.length / 1) - 1;
    }
    if (window.innerWidth > 900 && window.innerWidth <= 1200) {
      return Math.ceil(rooms.length / 2);
    }
    return Math.ceil(rooms.length / 3);
  };
  const stepCount = getStepCount();
  const ButtonGroup = ({
    next, previous, goToSlide, ...rest
  }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="carousel-button-group">
        <button
          onClick={() => previous()}
          className={
            currentSlide === 0
              ? 'carousel-button-left disable-button'
              : 'carousel-button-left'
          }
          type="button"
        >
          <ArrowLeftOutlinedIcon color="primary" />
        </button>

        <button
          onClick={() => next()}
          type="button"
          className={
            currentSlide === stepCount
              ? 'carousel-button-right disable-button'
              : 'carousel-button-right'
          }
        >
          <ArrowRightOutlinedIcon color="primary" />
        </button>
      </div>
    );
  };

  ButtonGroup.propTypes = {
    next: PropTypes.func,
    previous: PropTypes.func,
    goToSlide: PropTypes.func,
  };

  ButtonGroup.defaultProps = {
    next: (e) => e,
    previous: (e) => e,
    goToSlide: (e) => e,
  };
  if (status === 'loading') {
    return (
      <Box>
        <CircularProgress color="secondary" />
      </Box>
    );
  }
  return (
    <Carousel
      arrows={false}
      renderButtonGroupOutside
      responsive={responsive}
      customButtonGroup={<ButtonGroup />}
    >
      {rooms.map((room) => (
        <div className="corousel-item" key={room.id}>
          <NavLink to={`/details/${room.id}`}>
            <div className="corousel-item-pic-container">
              <img src={room.image_url} alt="room" />
            </div>
          </NavLink>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: { xs: '90%', md: '80%', xl: '65%' },
              margin: '0 auto',
            }}
          >
            <Typography variant="h6" fontWeight={700} letterSpacing="1px">
              {room.name}
            </Typography>
            <Box
              sx={{
                borderBottom: '2px dotted #a1a1a1',
                width: { xs: '45%', xl: '40%' },
                margin: '0.8rem 0 0.4rem',
              }}
            />
            <Typography variant="body1" color="text.third">
              {room.description}
            </Typography>
          </Box>
          <Box
            id="round-icons-container"
            sx={{
              width: { xs: '30%', md: '40%' },
              margin: '1rem auto',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <FacebookIconRound />
            <TwitterIconRound />
            <InstagramIconRound />
          </Box>
        </div>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
