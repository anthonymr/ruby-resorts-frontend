import { createSlice } from '@reduxjs/toolkit';
import roomsList from '../../utilities/roomsList';

const initialState = { rooms: roomsList, status: 'loading' };

const roomsSlice = createSlice({ name: 'rooms', initialState });

export default roomsSlice.reducer;
