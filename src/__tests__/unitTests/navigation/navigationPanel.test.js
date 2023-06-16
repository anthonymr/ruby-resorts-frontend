import { render } from '@testing-library/react';
import NavigationPanel from '../../../components/navigation/navigationPanel';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

describe('Navigation Panel', () => {
  it('navigation panel to have logo', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <NavigationPanel />
        </Provider>
      </BrowserRouter>
    );
    const logoImage = document.querySelector("img");
    expect(logoImage.alt).toContain('Ruby resorts logo');
  });
});
