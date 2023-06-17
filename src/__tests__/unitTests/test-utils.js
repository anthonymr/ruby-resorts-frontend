import React from 'react';
import PropTypes from 'prop-types';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';

const render = (ui, options) => {
  const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;
  Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return rtlRender(ui, { wrapper: Wrapper, ...options });
};

export * from '@testing-library/react';
export { render };
