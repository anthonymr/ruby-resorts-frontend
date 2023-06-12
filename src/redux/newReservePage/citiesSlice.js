import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cities: [
    { id: 1, name: 'Berlin' },
    { id: 3, name: 'Amsterdam' },
    { id: 2, name: 'Vienna' },
    { id: 4, name: 'Porto' },
    { id: 5, name: 'Valencia' },
  ],
};

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
});

export default citiesSlice.reducer;
