import '@testing-library/jest-dom/extend-expect';
import { renderWithRouter } from '../../../testutils/wrappers';
import NewReservePage from '../../components/newReservationPage/newReservePage';
import { fireEvent, screen } from '@testing-library/react';

describe('New Reservation Page', () => {
  it('New Reservation page has placeholder text', () => {
    const { getByText } = renderWithRouter(<NewReservePage />);
    expect(getByText('BOOK YOUR NEXT STAY WITH US')).toBeInTheDocument();
  });

  it('New Reservation page has username ', () => {
    const { getByText } = renderWithRouter(<NewReservePage />);
    expect(getByText('admin')).toBeInTheDocument();
  });

  it('New Reservation check Suite select is present', () => {
    const { getByTestId, getByText } = renderWithRouter(<NewReservePage />);
    const select = getByTestId('suite-select');
    expect(select).toBeInTheDocument();
    expect(getByText('Suite..')).toBeInTheDocument();
  });

  it('New Reservation check Hotels select is present', () => {
    const { getByTestId, getByText } = renderWithRouter(<NewReservePage />);
    const select = getByTestId('location-select');
    expect(select).toBeInTheDocument();
    expect(getByText('Location..')).toBeInTheDocument();
  });

  it('New Reservation check if error message is present', () => {
    const { getByText } = renderWithRouter(<NewReservePage />);
    fireEvent.click(screen.getByText('Book Now'));
    expect(getByText('Please select a Suite')).toBeInTheDocument();
  });

});
