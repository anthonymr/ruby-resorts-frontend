import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../../testutils/wrappers';
import DeleteRoom from '../../components/deleteRoomPage/DeleteRoom';

describe('Delete Room Page', () => {
  it('page has placeholder text content', () => {
    const { getByText } = renderWithProviders(
      <BrowserRouter>
        <DeleteRoom />
      </BrowserRouter>,
    );
    expect(getByText('DELETE A SUITE')).toBeInTheDocument();
  });
  it('page has table rows for Suite items in store', () => {
    const { getByText, getAllByRole } = renderWithProviders(
      <BrowserRouter>
        <DeleteRoom />
      </BrowserRouter>,
    );
    expect(getByText('Test Suite')).toBeInTheDocument();
    expect(getAllByRole('button').length).toBe(1);
  });

  it('page has delete button for a Suite', () => {
    const { getAllByRole } = renderWithProviders(
      <BrowserRouter>
        <DeleteRoom />
      </BrowserRouter>,
    );
    expect(getAllByRole('button').length).toBe(1);
  });

  it('Clicking a delete button opens confirmation popup', () => {
    const { getByText, getAllByRole } = renderWithProviders(
      <BrowserRouter>
        <DeleteRoom />
      </BrowserRouter>,
    );
    fireEvent.click(getAllByRole('button')[0]);
    expect(getByText('Are you sure you want to delete?')).toBeInTheDocument();
  });
});
