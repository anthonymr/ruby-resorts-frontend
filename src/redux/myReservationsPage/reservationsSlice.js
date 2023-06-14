import { createSlice } from '@reduxjs/toolkit';

const initialState = { reservations: [], status: 'loading' };

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    getReservationsList: (state, { payload }) => {
      const newState = { ...state, reservations: payload, status: 'completed' };
      return newState;
    },
  },
});

export const { getReservationsList } = reservationsSlice.actions;
export default reservationsSlice.reducer;
