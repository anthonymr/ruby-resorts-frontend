import { configureStore } from '@reduxjs/toolkit';
import roomsReducer from '../src/redux/mainPage/roomsSlice';
import detailsReducer from '../src/redux/detailsPage/detailsSlice';
import citiesReducer from '../src/redux/newReservePage/citiesSlice';
import userReducer from '../src/redux/login/userSlice';
import reservationsReducer from '../src/redux/myReservationsPage/reservationsSlice';
import { appApi } from '../src/services/apiService';

const initialsStateData = {
  rooms: {
    rooms: [
      {
        id: 1,
        name: 'Test Suite',
        description: 'Description of Test Suite',
        image_url: 'Some URL',
      },
    ],
    status: 'completed',
  },
  cities: {
    hotels: [
        {
          id: 1,
          name: 'Ruby Test Hotel',
          city: 'Test City',
          created_at: '2023-06-16T03:22:52.703Z',
          updated_at: '2023-06-16T03:22:52.703Z',
        },
    ],
  },
  user: {
    accessToken: null,
    userinfo: {
      id: 1,
      name: 'Admin User',
      username: 'admin',
      email: 'test@test.com',
      role: 'admin',
      created_at: '2023-06-16T03:22:52.683Z',
      updated_at: '2023-06-16T03:22:52.683Z',
    },
    error: '',
    authStatus: 'loggedin',
    dataFetched: true,
  },
  appApi: {
    queries: {},
    mutations: {},
    provided: {},
    subscriptions: {},
    config: {
      online: true,
      focused: true,
      middlewareRegistered: false,
      refetchOnFocus: false,
      refetchOnReconnect: false,
      refetchOnMountOrArgChange: false,
      keepUnusedDataFor: 60,
      reducerPath: 'appApi',
    },
  },
  reservations: {
    reservations: [
      {
        id: 1,
        start_date: '2023-06-16',
        end_date: '2023-06-17',
        user_id: 1,
        hotel_id: 1,
        room_id: 2,
        created_at: '2023-06-16T05:26:03.849Z',
        updated_at: '2023-06-16T05:26:03.849Z',
        amount: '220.0',
        hotel: {
          id: 1,
          name: 'Ruby Amsterdam',
          city: 'Amsterdam',
        },
        room: {
          id: 2,
          name: 'Emerald',
          description:
            'Emerald Suites are second only to our Ruby Suites when it comes to luxury. The suites come with 5-star amenities',
          full_price: '250.0',
          reservation_price: '220.0',
          reservation_fee: '5.0',
          rating: 5,
        },
        user: {
          id: 1,
          name: 'Admin User',
          username: 'admin',
          email: 'test@test.com',
          role: 'admin',
        },
      },
    ],
    status: 'completed',
  },
};

export const setMockStore = (preloadedState) => {
  return configureStore({
    reducer: {
      rooms: roomsReducer,
      cities: citiesReducer,
      user: userReducer,
      [appApi.reducerPath]: appApi.reducer,
      details: detailsReducer,
      reservations: reservationsReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(appApi.middleware),
    preloadedState,
  });
};

export default initialsStateData;
