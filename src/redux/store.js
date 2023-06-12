import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import roomsReducer from './mainPage/roomsSlice';
import detailsReducer from './detailsPage/detailsSlice'
import citiesReducer from './newReservePage/citiesSlice';

const store = configureStore({
  reducer: {
    rooms: roomsReducer,
    cities: citiesReducer,
    details: detailsReducer
  },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(logger),
});

export default store;
