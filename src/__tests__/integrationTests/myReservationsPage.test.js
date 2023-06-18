import { waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { renderWithProviders } from '../../testutils/wrappers';
import { server1 } from '../../testutils/mockServers';
import MyReservations from '../../components/myReservationsPage/myReservations';

beforeAll(() => server1.listen());
afterEach(() => server1.resetHandlers());
afterAll(() => server1.close());

describe('My Reservations Page', () => {
  it('testing getReservationsList reducer and actions', async () => {
    const { store } = renderWithProviders(
      <BrowserRouter>
        <MyReservations />
      </BrowserRouter>,
    );
    await waitFor(() => {
      const { reservations } = store.getState().reservations;
      expect(reservations.length).toBe(1);
      expect(reservations[0].hotel.name).toBe('Test Hotel');
    });
  });

  it('testing received data is displayed in the page', async () => {
    const { getByText } = renderWithProviders(
      <BrowserRouter>
        <MyReservations />
      </BrowserRouter>,
    );
    await waitFor(() => {
      expect(getByText('@ Test Hotel, Test City')).toBeInTheDocument();
    });
  });
});
