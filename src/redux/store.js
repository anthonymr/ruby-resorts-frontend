import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import roomsReducer from './mainPage/roomsSlice';
import citiesReducer from './newReservePage/citiesSlice';

const store = configureStore({
  reducer: {
    rooms: roomsReducer,
    cities: citiesReducer,
  },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(logger),
});

export default store;
