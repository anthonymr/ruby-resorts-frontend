import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { PropTypes } from 'prop-types';
import roomImage from '../styles/images/room1.jpg';

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
        width: { xs: '100%', sm: '80%', md: '90%' },
        height: '100vh',
        margin: '0 auto',
        padding: { xs: '15% 0 0', sm: '0' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: { xs: 'start', sm: 'center' },
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Typography variant="h5" fontWeight={800} color="black">
        OUR SUITES
      </Typography>
      <Typography variant="body1" fontWeight={600} color="text.third">
        Please select a Suite
      </Typography>
      <Box
        sx={{
          borderBottom: '2px dotted #a1a1a1',
          width: '10%',
          margin: '1rem',
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
                <img src={roomImage} alt="room" />
              </div>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '70%',
                  margin: '0 auto',
                }}
              >
                <Typography variant="h6" fontSize="1rem" fontWeight={700}>
                  {room.name}
                </Typography>
                <Box
                  sx={{
                    borderBottom: '2px dotted #a1a1a1',
                    width: '10%',
                    margin: '0.8rem 0 0.4rem',
                  }}
                />
                <Typography variant="body1" color="text.third">{room.description}</Typography>
              </Box>
              <Box>
                Icons
              </Box>
            </div>
          ))}
        </Carousel>
      </div>
    </Box>
  );
};

export default MainPage;
