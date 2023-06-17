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
    <Box sx={{ width: 100, height: 100 }}>
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
          count={12}
          style={{
            background: '#fff',
            width: '2px',
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

export default Rating;
