import { fireEvent, render, screen } from '@testing-library/react';
import NavigationPanel from '../../components/navigation/navigationPanel';
import { createMemoryHistory } from "history"
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';

Description('Navigation Panel', () => {
  it('navigate to bookings page', () => {
    const history = createMemoryHistory();
    render(
      <BrowserRouter>
        <Provider store={store}>
          <NavigationPanel />
        </Provider>
      </BrowserRouter>
    );
    fireEvent.click(screen.getByText('BOOK NOW'));
    expect(history.location.pathname).toBe('/newreservation/0');
  });
});
