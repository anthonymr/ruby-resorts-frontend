import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';

// Custom render method that includes the Redux Provider
const render = (ui, options) => {
  const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;
  return rtlRender(ui, { wrapper: Wrapper, ...options });
};

export * from '@testing-library/react';
export { render };
