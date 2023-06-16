import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import NavigationItems from '../../../components/navigation/navigationPanel';
import { createMemoryHistory } from 'history';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { renderWithProviders } from '../../../../testutils/wrappers';
import MainPage from '../../../components/mainpage/mainPage';

describe('Navigation Items', () => {
  it('Main Page has placeholder text page', async () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/mainpage']}>
        <MainPage />
      </MemoryRouter>
    );
    expect('OUR SUITES').toBeInTheDocument;
    expect('Test Suite').toBeInTheDocument;
  });
});
