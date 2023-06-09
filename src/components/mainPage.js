import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { PropTypes } from 'prop-types';

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
        className={currentSlide === 0 ? 'disable-button' : ''}
        type="button"
      >
        <ArrowLeftOutlinedIcon color="primary" />
      </button>
      {/* <Button
        className={currentSlide === 0 ? 'disable-button' : ''}
        onClick={() => previous()}
        sx={{
          background: '#96bf01',
          '&:hover': { background: '#96bf01' },
          borderRadius: 'none',
          borderTopRightRadius: '50px',
          borderBottomRightRadius: '50px',
        }}
      >
        <ArrowLeftOutlinedIcon color="primary" />
      </Button> */}

      <button onClick={() => next()} type="button">
        <ArrowRightOutlinedIcon color="primary" />
      </button>

      {/* <Button
        onClick={() => next()}
        sx={{
          background: '#96bf01',
          '&:hover': { background: '#96bf01' },
          borderRadius: 'none',
          borderTopLeftRadius: '50px',
          borderBottomLeftRadius: '50px',
        }}
      >
        <ArrowRightOutlinedIcon color="primary" />
      </Button> */}
    </div>
  );
};

const MainPage = () => {
  const { rooms, status } = useSelector((state) => state.rooms);
  console.log(status);
  console.log(rooms);

  return (
    <Box
      sx={{
        width: { xs: '100%', sm: '80%', md: '90%' },
        height: '100vh',
        margin: '0 auto',
        padding: { xs: '5% 0 0', sm: '0' },
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <div className="main-carousel-container">
        <Carousel
          arrows={false}
          renderButtonGroupOutside
          responsive={responsive}
          customButtonGroup={<ButtonGroup />}
        >
          {rooms.map((room) => (
            <div key={room.id}>{room.name}</div>
          ))}
        </Carousel>
      </div>
    </Box>
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

export default MainPage;
