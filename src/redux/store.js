import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '../services/apiService';
import roomsReducer from './mainPage/roomsSlice';
import citiesReducer from './newReservePage/citiesSlice';
import userReducer from './login/userSlice';

const store = configureStore({
  reducer: {
    rooms: roomsReducer,
    cities: citiesReducer,
    user: userReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(authApi.middleware),
});

export default store;
