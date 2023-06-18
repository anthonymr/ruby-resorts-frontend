import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { renderWithProviders } from '../../testutils/wrappers';
import MainPage from '../../components/mainPage/mainPage';
import CustomCarousel from '../../components/mainPage/customCarousel';

describe('Main Page', () => {
  it('Main Page has placeholder texts', async () => {
    const { getByText } = renderWithProviders(
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>,
    );
    expect(getByText('OUR SUITES')).toBeInTheDocument();
  });

  it('Main Page has placeholder sub text', async () => {
    const { getByText } = renderWithProviders(
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>,
    );
    expect(getByText('Please select a Suite')).toBeInTheDocument();
  });

  it('Main Page Carousel has Suites list rendered', async () => {
    const { container } = renderWithProviders(
      <BrowserRouter>
        <CustomCarousel />
      </BrowserRouter>,
    );
    expect(container.querySelector('ul')).toBeInTheDocument();
  });
});
