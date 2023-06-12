import { createSlice } from '@reduxjs/toolkit';
import roomsList from '../../utilities/roomsList';

const initialState = { details: roomsList[1], status: 'loading' };

const detailsSlice = createSlice({ name: 'details', initialState });

export default detailsSlice.reducer;
