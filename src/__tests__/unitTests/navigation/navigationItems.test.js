import { fireEvent, render, screen } from '@testing-library/react';
import NavigationItems from '../../../components/navigation/navigationPanel';
import { createMemoryHistory } from 'history';
import { BrowserRouter } from 'react-router-dom';
import { renderWithProviders } from '../../../../testutils/wrappers';

describe('Navigation Items', () => {
  it('navigate to bookings page', () => {
    const history = createMemoryHistory();
    renderWithProviders(
      <BrowserRouter>
        <NavigationItems />
      </BrowserRouter>
    );
    fireEvent.click(screen.getByText('MY BOOKINGS'));
    expect(history.location.pathname).toBe('/newreservation/0');
  });
});
