import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
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
      <CircularProgressbar
        value={rating}
        maxValue={5}
        text={rating}
        styles={buildStyles({
          pathColor: color,
          textColor: color,
        })}
      />
    </Box>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;

