import { waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { renderWithProviders } from '../../testutils/wrappers';
import { server1 } from '../../testutils/mockServers';
import NavigationPanel from '../../components/navigation/navigationPanel';

beforeAll(() => server1.listen());
afterEach(() => server1.resetHandlers());
afterAll(() => server1.close());

describe('Navigation Panel', () => {
  it('testing adduserinfo reducer and actions', async () => {
    const { store } = renderWithProviders(
      <BrowserRouter>
        <NavigationPanel />
      </BrowserRouter>,
    );
    await waitFor(() => {
      const userInfo = store.getState().user.userinfo;
      expect(userInfo.name).toBe('Test User');
    });
  });

  it('testing getRoomsList reducer and actions', async () => {
    const { store } = renderWithProviders(
      <BrowserRouter>
        <NavigationPanel />
      </BrowserRouter>,
    );
    await waitFor(() => {
      const { rooms } = store.getState().rooms;
      expect(rooms.length).toBe(2);
    });
  });

  it('testing getRoomsList reducer and actions', async () => {
    const { store } = renderWithProviders(
      <BrowserRouter>
        <NavigationPanel />
      </BrowserRouter>,
    );
    await waitFor(() => {
      const { hotels } = store.getState().cities;
      expect(hotels.length).toBe(1);
    });
  });

  it('test fetched username is rendered in Navigation Panel', async () => {
    const { getAllByText } = renderWithProviders(
      <BrowserRouter>
        <NavigationPanel />
      </BrowserRouter>,
    );
    await waitFor(() => {
      expect(getAllByText('testuser').length).toBe(2);
    });
  });
});
