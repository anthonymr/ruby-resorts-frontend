/*eslint-disable*/
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import roomsReducer from '../src/redux/mainPage/roomsSlice';
import detailsReducer from '../src/redux/detailsPage/detailsSlice';
import citiesReducer from '../src/redux/newReservePage/citiesSlice';
import userReducer from '../src/redux/login/userSlice';
import reservationsReducer from '../src/redux/myReservationsPage/reservationsSlice';
import { appApi } from '../src/services/apiService';

import initialsStateData from './mockStoreData';

export function renderWithProviders(
  ui,
  {
    preloadedState = initialsStateData,
    store = configureStore({
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
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export const renderWithRouter = (
  ui,
  {
    preloadedState = initialsStateData,
    store = configureStore({
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
      preloadedState,
    }),
    ...renderOptions
  } = {}
) => {
  function Wrapper({ children }) {
    return (
      <MemoryRouter initialEntries={['/mainpage']}>
        <Provider store={store}>
          <Routes>
            <Route element={children} />
          </Routes>
        </Provider>
      </MemoryRouter>
    );
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};
