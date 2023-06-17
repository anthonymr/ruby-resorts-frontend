import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { renderWithProviders } from '../../../testutils/wrappers';
import MyReservations from '../../components/myReservationsPage/myReservations';

describe('My Reservations Page', () => {
  it('My Reservation Page has placeholder text', async () => {
    const { getByText } = renderWithProviders(
      <BrowserRouter>
        <MyReservations />
      </BrowserRouter>,
    );
    expect(getByText('YOUR BOOKINGS')).toBeInTheDocument();
  });

  it('My Reservation Page has hotel name', async () => {
    const { getByText } = renderWithProviders(
      <BrowserRouter>
        <MyReservations />
      </BrowserRouter>,
    );
    expect(getByText('@ Ruby Amsterdam, Amsterdam')).toBeInTheDocument();
  });
});
