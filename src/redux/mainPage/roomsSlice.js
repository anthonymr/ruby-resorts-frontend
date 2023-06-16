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
    deleteFromList: (state, { payload }) => {
      const newRooms = [...state.rooms];
      newRooms.splice(
        newRooms.findIndex((i) => i.id === payload),
        1,
      );
      const newState = { ...state, rooms: newRooms };
      return newState;
    },
    addRoomReducer: (state, { payload }) => {
      const newRooms = [...state.rooms];
      newRooms.push(payload);
      const newState = { ...state, rooms: newRooms };
      return newState;
    }
  },
});

export const { getRoomsList, deleteFromList, addRoomReducer } = roomsSlice.actions;
export default roomsSlice.reducer;
