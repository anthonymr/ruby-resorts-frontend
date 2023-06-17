import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { renderWithProviders } from '../../../testutils/wrappers';
import LoginPage from '../../components/loginPage/loginPage';
import { fireEvent } from '@testing-library/react';

describe('Login Page', () => {
  it('Login Page has Logo', () => {
    const { getByAltText } = renderWithProviders(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );
    expect(getByAltText('Ruby Resorts Main logo')).toBeInTheDocument();
  });

  it('Login page has placeholder text', () => {
    const { getByText } = renderWithProviders(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );
    expect(getByText('LOGIN')).toBeInTheDocument();
  });

  it(`Check change of input's value`, () => {
    const { container } = renderWithProviders(
      <BrowserRouter>
           <LoginPage />
      </BrowserRouter>
    );
    const userNameInput = container.querySelector(`input[name="username"]`);
    fireEvent.change(userNameInput, { target: { value: 'testusername' } });
    expect(userNameInput.value).toBe('testusername');
  });
});
