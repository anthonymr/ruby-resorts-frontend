import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { PropTypes } from 'prop-types';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import initialStateData, { setMockStore } from './mockStoreData';

export function renderWithProviders(
  ui,
  {
    preloadedState = initialStateData,
    store = setMockStore(preloadedState),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    Wrapper.propTypes = {
      children: PropTypes.node.isRequired,
    };
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export const renderWithRouter = (
  ui,
  {
    preloadedState = initialStateData,
    store = setMockStore(preloadedState),
    ...renderOptions
  } = {},
) => {
  function Wrapper({ children }) {
    Wrapper.propTypes = {
      children: PropTypes.node.isRequired,
    };
    return (
      <MemoryRouter initialEntries={['/newreservepage/0']}>
        <Provider store={store}>
          <Routes>
            <Route path="/newreservepage/:roomId" element={children} />
          </Routes>
        </Provider>
      </MemoryRouter>
    );
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};
