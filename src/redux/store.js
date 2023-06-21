import { configureStore } from '@reduxjs/toolkit';
import { appApi } from '../services/apiService';
import roomsReducer from './mainPage/roomsSlice';
import detailsReducer from './detailsPage/detailsSlice';
import citiesReducer from './newReservePage/citiesSlice';
import userReducer from './login/userSlice';
import reservationsReducer from './myReservationsPage/reservationsSlice';

const store = configureStore({
  reducer: {
    rooms: roomsReducer,
    cities: citiesReducer,
    user: userReducer,
    [appApi.reducerPath]: appApi.reducer,
    details: detailsReducer,
    reservations: reservationsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(appApi.middleware),
});

export default store;
