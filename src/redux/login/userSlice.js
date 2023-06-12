import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = { accessToken: '', error: '' };
const url = 'http://127.0.0.1:3000/api/v1/authentication';

export const fetchUserToken = createAsyncThunk(
  'token/fetchUserToken',
  async (credentials) => {
    const response = await axios.post(url, {
      username: credentials.username,
      password: credentials.password,
    });
    console.log(response);
    return response;
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUserToken.fulfilled, (state, { payload }) => {
        const newState = { ...state, accessToken: payload.data };
        return newState;
      })
      .addCase(fetchUserToken.rejected, (state, { payload }) => {
        console.log(`payload -- ${payload}`);
        const newState = { ...state };
        return newState;
      });
  },
});

export default userSlice.reducer;
