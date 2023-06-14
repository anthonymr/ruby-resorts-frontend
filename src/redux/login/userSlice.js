import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const accessToken = localStorage.getItem('accessToken')
  ? localStorage.getItem('accessToken')
  : null;
const initialState = {
  accessToken,
  userinfo: {},
  error: '',
  authStatus: accessToken ? 'loggedin' : 'loggedout',
};
const url = 'http://127.0.0.1:3000/api/v1/authentication';

export const fetchUserToken = createAsyncThunk(
  'token/fetchUserToken',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(url, {
        username: credentials.username,
        password: credentials.password,
      });
      localStorage.setItem('accessToken', data.token);
      return data;
    } catch (error) {
      if (error.response && error.response.data.errors) {
        return rejectWithValue(error.response.data.errors);
      }
      return rejectWithValue(error.message);
    }
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUserInfo: (state, { payload }) => {
      state.userinfo = payload;
    },
    logout: (state) => {
      localStorage.removeItem('accessToken');
      return {
        ...state,
        accessToken: null,
        userinfo: {},
        error: '',
        authStatus: 'loggedout',
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUserToken.fulfilled, (state, { payload }) => {
        const newState = {
          ...state,
          accessToken: payload.token,
          authStatus: 'loggedin',
        };
        return newState;
      })
      .addCase(fetchUserToken.rejected, (state, { payload }) => {
        const newState = { ...state, authStatus: 'loggedout', error: payload };
        return newState;
      });
  },
});

export const { addUserInfo, logout } = userSlice.actions;
export default userSlice.reducer;
