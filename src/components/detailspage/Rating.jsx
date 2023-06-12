import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Rating = ({ rating }) => (
  <Box sx={{ width: 100, height: 100 }}>
    <CircularProgressbar value={rating} maxValue={5} text={rating} />
  </Box>
);

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
