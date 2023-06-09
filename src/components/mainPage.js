import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { PropTypes } from 'prop-types';
import {
  FacebookIconRound,
  InstagramIconRound,
  TwitterIconRound,
} from '../utilities/icons';

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

const MainPage = () => {
  const { rooms } = useSelector((state) => state.rooms);
  const ButtonGroup = ({
    next,
    previous,
    goToSlide,
    ...rest
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
            currentSlide === 2
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

  return (
    <Box
      sx={{
        width: {
          xs: '100%',
          sm: '80%',
          md: '85%',
          lg: '88%',
        },
        height: '100vh',
        margin: '0 auto',
        padding: { xs: '15% 0 0', md: '0' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
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
        <Carousel
          arrows={false}
          renderButtonGroupOutside
          responsive={responsive}
          customButtonGroup={<ButtonGroup />}
        >
          {rooms.map((room) => (
            <div className="corousel-item" key={room.id}>
              <div className="corousel-item-pic-container">
                <img src={room.image} alt="room" />
              </div>
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
      </div>
    </Box>
  );
};

export default MainPage;
