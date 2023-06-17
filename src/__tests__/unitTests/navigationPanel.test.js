import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import NavigationPanel from '../../components/navigation/navigationPanel';
import { renderWithProviders } from '../../../testutils/wrappers';

describe('Navigation Panel', () => {
  it('navigation panel to have logo', () => {
    const { getAllByAltText } = renderWithProviders(
      <BrowserRouter>
        <NavigationPanel />
      </BrowserRouter>,
    );
    expect(getAllByAltText('Ruby resorts logo').length).toBe(2);
  });
  it('navigation panel to have Book Now page link', () => {
    const { getAllByText } = renderWithProviders(
      <BrowserRouter>
        <NavigationPanel />
      </BrowserRouter>,
    );
    expect(getAllByText('BOOK NOW').length).toBe(2);
  });
});
