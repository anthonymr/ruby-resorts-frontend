import { createSlice } from '@reduxjs/toolkit';

const initialState = { rooms: [], status: 'loading' };

const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    getRoomsList: (state, { payload }) => {
      const newState = { ...state, rooms: payload, status: 'completed' };
      return newState;
    },
  },
});

export const { getRoomsList } = roomsSlice.actions;
export default roomsSlice.reducer;
