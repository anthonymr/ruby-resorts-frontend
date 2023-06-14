import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import loginPageStyle, {
  loginFormContainerStyle,
  loginSubmitBtn,
  loginTextFieldStyle,
} from './loginStyleObjs';
import { fetchUserToken } from '../../redux/login/userSlice';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { authStatus, error } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (authStatus === 'loggedin') {
      navigate('/mainpage');
    }
  }, [navigate, authStatus]);

  const [loginCredentials, setLoginCredentials] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchUserToken(loginCredentials));
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
      <Typography variant="h6" color="text.fourth">{error}</Typography>
    </Box>
  );
};

export default LoginPage;
