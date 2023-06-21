import { waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { renderWithProviders } from '../../testutils/wrappers';
import { server1 } from '../../testutils/mockServers';
import Details from '../../components/detailspage/Details';

beforeAll(() => server1.listen());
afterEach(() => server1.resetHandlers());
afterAll(() => server1.close());

describe('Details Page', () => {
  it('testing getRoomDetails reducers and actions', async () => {
    const { store } = renderWithProviders(
      <MemoryRouter initialEntries={['/details/1']}>
        <Routes>
          <Route path="/details/:roomId" element={<Details />} />
        </Routes>
      </MemoryRouter>,
    );
    await waitFor(() => {
      const roomDetail = store.getState().details.roomDetails;
      expect(roomDetail.name).toBe('Server Test Suite 1');
    });
  });
  it('testing if fetched data is displayed in the page', async () => {
    const { getByText } = renderWithProviders(
      <MemoryRouter initialEntries={['/details/1']}>
        <Routes>
          <Route path="/details/:roomId" element={<Details />} />
        </Routes>
      </MemoryRouter>,
    );
    await waitFor(() => {
      expect(getByText('Server Test Suite 1')).toBeInTheDocument();
    });
  });
});
