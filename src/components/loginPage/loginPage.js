import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  Box, Typography, TextField, Button,
} from '@mui/material';
import loginPageStyle, {
  loginFormContainerStyle,
  loginSubmitBtn,
  loginTextFieldStyle,
} from './loginStyleObjs';
import { useAuthenticateUserMutation } from '../../services/apiService';
import { saveLoginToken } from '../../redux/login/userSlice';
import logo from '../../styles/images/app_logo.svg';

const LoginPage = () => {
  const navigate = useNavigate();
  const [authenticateUser, response] = useAuthenticateUserMutation();
  const dispatch = useDispatch();
  useEffect(() => {
    if (response.isSuccess) {
      dispatch(saveLoginToken(response.data));
      navigate('/mainpage');
    }
  }, [dispatch, response, navigate]);

  const [loginCredentials, setLoginCredentials] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser(loginCredentials);
  };

  const handleCredentialsChange = (e) => {
    if (e.target.id === 'username') {
      setLoginCredentials({ ...loginCredentials, username: e.target.value });
    }
    if (e.target.id === 'password') {
      setLoginCredentials({ ...loginCredentials, password: e.target.value });
    }
  };
  return (
    <Box sx={loginPageStyle}>
      <Box>
        <img src={logo} alt="Ruby Resorts Main logo" id="signin-logo" />
      </Box>
      <Typography
        variant="h4"
        letterSpacing="3px"
        fontWeight={700}
        color="text.fourth"
      >
        LOGIN
      </Typography>
      <form id="login-form" onSubmit={handleSubmit}>
        <Box sx={loginFormContainerStyle}>
          <TextField
            id="username"
            label="Username"
            sx={loginTextFieldStyle}
            required
            onChange={handleCredentialsChange}
          />
          <TextField
            id="password"
            type="password"
            label="password"
            sx={loginTextFieldStyle}
            required
            onChange={handleCredentialsChange}
          />
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            sx={loginSubmitBtn}
          >
            Log In
          </Button>
        </Box>
      </form>
      <Typography variant="h6" sx={{ margin: '1rem' }} fontWeight={700} color="text.fourth">
        Not a Member? Please &nbsp;
        <Link to="signup" id="signup-link-text">Sign Up</Link>
      </Typography>
      {response.isError && (
        <Typography
          variant="h6"
          fontWeight={700}
          color="text.error"
          sx={{ margin: '1rem' }}
        >
          {response.error.data.errors}
        </Typography>
      )}
    </Box>
  );
};

export default LoginPage;
