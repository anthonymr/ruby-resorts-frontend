import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import RadialSeparators from './RadialSeparator';
import 'react-circular-progressbar/dist/styles.css';

const Rating = ({ rating }) => {
  let color = '#96bf01';
  if (rating < 3.5) {
    color = '#ffbb00';
  }
  if (rating < 2.5) {
    color = '#ff0000';
  }

  return (
    <Box
      sx={{
        width: { xs: '5rem', md: '3rem', lg: '5rem' },
        height: { xs: '5rem', md: '3rem', lg: '5rem' },
      }}
    >
      <CircularProgressbarWithChildren
        value={rating}
        text={`${rating}`}
        maxValue={5}
        strokeWidth={10}
        styles={buildStyles({
          strokeLinecap: 'butt',
          pathColor: color,
          textColor: color,
        })}
      >
        <RadialSeparators
          count={5}
          style={{
            background: '#fff',
            width: '3px',
            height: `${10}%`,
          }}
        />
      </CircularProgressbarWithChildren>
    </Box>
  );
};

Rating.propTypes = {
  rating: PropTypes.number,
};

Rating.defaultProps = {
  rating: 5,
};

export default Rating;
