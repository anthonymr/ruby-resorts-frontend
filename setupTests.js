import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const customRender = (ui, options) => render(ui, {
  wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
  ...options,
});

export * from '@testing-library/react';
export { customRender as render };
