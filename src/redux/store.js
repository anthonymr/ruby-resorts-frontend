import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import roomsReducer from './mainPage/roomsSlice';

const store = configureStore({
  reducer: {
    rooms: roomsReducer,
  },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(logger),
});

export default store;
