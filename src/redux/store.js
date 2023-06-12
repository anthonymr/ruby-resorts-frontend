import { configureStore } from '@reduxjs/toolkit';
import roomsReducer from './mainPage/roomsSlice';
import citiesReducer from './newReservePage/citiesSlice';
import userReducer from './login/userSlice';

const store = configureStore({
  reducer: {
    rooms: roomsReducer,
    cities: citiesReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
