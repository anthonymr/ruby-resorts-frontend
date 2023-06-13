import { configureStore } from '@reduxjs/toolkit';
import { appApi } from '../services/apiService';
import roomsReducer from './mainPage/roomsSlice';
import citiesReducer from './newReservePage/citiesSlice';
import userReducer from './login/userSlice';

const store = configureStore({
  reducer: {
    rooms: roomsReducer,
    cities: citiesReducer,
    user: userReducer,
    [appApi.reducerPath]: appApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(appApi.middleware),
});

export default store;
