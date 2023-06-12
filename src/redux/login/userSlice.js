import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = { accessToken: '', error: '', status: 'loggedout' };
const url = 'http://127.0.0.1:3000/api/v1/authentication';

export const fetchUserToken = createAsyncThunk(
  'token/fetchUserToken',
  async (credentials) => {
    const response = await axios.post(url, {
      username: credentials.username,
      password: credentials.password,
    });
    return response;
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUserToken.fulfilled, (state, { payload }) => {
      console.log(payload.data);
      const newState = {
        ...state,
        accessToken: payload.data,
        status: 'loggedin',
      };
      return newState;
    });
    // .addCase(fetchUserToken.rejected, (state, { payload }) => {
    //   const newState = { ...state };
    //   return newState;
    // });
  },
});

export default userSlice.reducer;
