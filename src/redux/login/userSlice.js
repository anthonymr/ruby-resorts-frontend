import { createSlice } from '@reduxjs/toolkit';

const accessToken = localStorage.getItem('accessToken')
  ? localStorage.getItem('accessToken')
  : null;
const initialState = {
  accessToken,
  userinfo: {},
  error: '',
  authStatus: accessToken ? 'loggedin' : 'loggedout',
  dataFetched: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveLoginToken: (state, { payload }) => {
      localStorage.setItem('accessToken', payload.token);
      const newState = {
        ...state,
        accessToken: payload.token,
        authStatus: 'loggedin',
      };
      return newState;
    },
    addUserInfo: (state, { payload }) => {
      const newState = { ...state };
      newState.userinfo = payload;
      newState.dataFetched = true;
      return newState;
    },
    logoutUser: (state) => {
      localStorage.removeItem('accessToken');
      return {
        ...state,
        accessToken: null,
        userinfo: {},
        error: '',
        authStatus: 'loggedout',
        dataFetched: 'false',
      };
    },
  },
});

export const { saveLoginToken, addUserInfo, logoutUser } = userSlice.actions;
export default userSlice.reducer;
