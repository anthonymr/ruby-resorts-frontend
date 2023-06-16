// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const URL = 'http://localhost:3000';

// const initialState = {
//   roomDetails: {},
//   isLoading: true,
// };

// export const getRoomDetails = createAsyncThunk(
//   'details/getRoomDetails',
//   async (room) => {
//     const response = await axios.get(`${URL}/rooms/${room}`);
//     try {
//       if (response.status === 200) {
//         return response.data;
//       }
//     } catch (error) {
//       console.log(error);
//     }
//     return response.data;
//   },
// );

// export const deleteRoom = createAsyncThunk(
//   'details/deleteRoom',
//   async (room) => {
//     const response = await axios.delete(`${URL}/rooms/${room}`);
//     try {
//       if (response.status === 200) {
//         return response.data;
//       }
//     } catch (error) {
//       console.log(error);
//     }
//     return response.data;
//   },
// );

// const detailsSlice = createSlice({
//   name: 'details',
//   initialState,
//   reducers: {},
//   extraReducers: {
//     [getRoomDetails.pending]: (state) => {
//       state.isLoading = true;
//     },
//     [getRoomDetails.fulfilled]: (state, action) => {
//       state.roomDetails = action.payload;
//       state.isLoading = false;
//     },
//     [getRoomDetails.rejected]: (state) => {
//       state.isLoading = false;
//     },
//   },
// });

// export default detailsSlice.reducer;
