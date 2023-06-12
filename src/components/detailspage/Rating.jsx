import React from 'react';
import { Box} from '@mui/material' 
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Rating = (props) => {
  return (
    <Box sx={{ width: 100, height: 100 }}>
      <CircularProgressbar value={props.rating} maxValue={5} text={props.rating} />
    </Box>
  );
};

export default Rating;
