import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../../testutils/wrappers';
import SignUpPage from '../../components/signUpPage';

describe('Signup Page', () => {
  it('Sign up page has logo', () => {
    const { getByAltText } = renderWithProviders(
      <BrowserRouter>
        <SignUpPage />
      </BrowserRouter>,
    );
    expect(getByAltText('Ruby Resorts Main logo')).toBeInTheDocument();
  });

  it('Sign up page has placeholder text', () => {
    const { getByText } = renderWithProviders(
      <BrowserRouter>
        <SignUpPage />
      </BrowserRouter>,
    );
    expect(getByText('SIGN UP')).toBeInTheDocument();
  });

  it('Check change of input\'s value', () => {
    const { container } = renderWithProviders(
      <BrowserRouter>
        <SignUpPage />
      </BrowserRouter>,
    );
    const nameInput = container.querySelector('input[name="name"]');
    fireEvent.change(nameInput, { target: { value: 'Test User' } });
    expect(nameInput.value).toBe('Test User');
  });

  it('Check if error message is displayed with wrong inputs', () => {
    const { getByText, getByRole, container } = renderWithProviders(
      <BrowserRouter>
        <SignUpPage />
      </BrowserRouter>,
    );
    const nameInput = container.querySelector('input[name="name"]');
    fireEvent.change(nameInput, { target: { value: 'Test User' } });
    const emailInput = container.querySelector('input[name="email"]');
    fireEvent.change(emailInput, { target: { value: 'user@test.com' } });
    const usernameInput = container.querySelector('input[name="username"]');
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    const pwdInput = container.querySelector('input[name="password"]');
    fireEvent.change(pwdInput, { target: { value: 'dummypassword' } });
    const confirmPwdInput = container.querySelector(
      'input[name="confirmPassword"]',
    );
    fireEvent.change(confirmPwdInput, { target: { value: 'dummypassw' } });

    fireEvent.click(getByRole('button'));

    expect(getByText('Passwords don\'t match. Please try again'))
      .toBeInTheDocument();
  });
});
