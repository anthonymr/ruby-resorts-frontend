import { createSlice } from '@reduxjs/toolkit';

const initialState = { hotels: [] };

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    addHotelList: (state, { payload }) => {
      const newState = { ...state, hotels: payload };
      return newState;
    },
  },
});

export const { addHotelList } = citiesSlice.actions;
export default citiesSlice.reducer;
