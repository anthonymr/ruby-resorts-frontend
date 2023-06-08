import { createSlice } from '@reduxjs/toolkit';

const initialState = { rooms: [], status: 'loading' };

const roomsSlice = createSlice({ name: 'rooms', initialState });

export default roomsSlice.reducer;
