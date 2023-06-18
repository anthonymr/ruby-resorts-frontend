import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { renderWithProviders } from '../../testutils/wrappers';
import { server1 } from '../../testutils/mockServers';
import DeleteRoom from '../../components/deleteRoomPage/DeleteRoom';

beforeAll(() => server1.listen());
afterEach(() => server1.resetHandlers());
afterAll(() => server1.close());

describe('Delete Room Page', () => {
  it('test deleteFromList reducer and action.', async () => {
    const { store } = renderWithProviders(
      <BrowserRouter>
        <DeleteRoom />
      </BrowserRouter>
    );
    const button = screen.getAllByText('Delete', { selector: 'button' })[0];
    userEvent.click(button);
    const confirmButton = screen.getByText('Confirm', { selector: 'button' });
    userEvent.click(confirmButton);
    await waitFor(() => {
      const { rooms } = store.getState().rooms;
      expect(rooms.length).toBe(0);
    });
  });
});
