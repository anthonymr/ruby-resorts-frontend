import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  roomDetails: {},
  isLoading: true,
};

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    getRoomDetails: (state, { payload }) => {
      const newState = { ...state, roomDetails: payload, status: 'completed' };
      return newState;
    },
  },
});

export const { getRoomDetails } = detailsSlice.actions;
export default detailsSlice.reducer;
