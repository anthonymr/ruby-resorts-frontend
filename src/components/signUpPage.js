import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Box, Typography, TextField, Button,
} from '@mui/material';
import { useCreateUserSignUpMutation } from '../services/apiService';
import {
  signupPageStyle,
  loginFormContainerStyle,
  loginSubmitBtn,
  loginTextFieldStyle,
} from './loginPage/loginStyleObjs';
import logo from '../styles/images/app_logo.svg';

const SignUpPage = () => {
  const [formData, setFormData] = useState({});
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const [createUserSignUp, response] = useCreateUserSignUpMutation();
  const navigate = useNavigate();
  useEffect(() => {
    if (response.isSuccess) {
      setSuccessMsg('Sign up successful. Please login now');
      setTimeout(() => {
        setSuccessMsg('');
        navigate('/');
      }, 1000);
    }

    if (response.isError) {
      setErrorMsg(response.error.data.errors.join(' '));
      setTimeout(() => {
        setErrorMsg('');
      }, 2500);
    }
  }, [response, navigate]);

  const handleCredentialsChange = (e) => {
    const newData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setErrorMsg("Passwords don't match. Please try again");
      setTimeout(() => {
        setErrorMsg('');
      }, 2500);
    } else {
      delete formData.confirmPassword;
      createUserSignUp(formData);
      e.target.reset();
    }
  };
  return (
    <Box sx={signupPageStyle}>
      <Box>
        <img src={logo} alt="Ruby Resorts Main logo" id="signin-logo" />
      </Box>
      <Typography
        variant="h4"
        letterSpacing="3px"
        fontWeight={700}
        color="text.fourth"
      >
        SIGN UP
      </Typography>
      <form id="signup-form" onSubmit={handleSubmit}>
        <Box sx={loginFormContainerStyle}>
          <TextField
            name="name"
            label="Full Name"
            sx={loginTextFieldStyle}
            required
            onChange={handleCredentialsChange}
            inputProps={{ minLength: 3, maxLength: 55 }}
          />
          <TextField
            name="email"
            label="E-Mail"
            type="email"
            sx={loginTextFieldStyle}
            required
            onChange={handleCredentialsChange}
            inputProps={{ minLength: 5, maxLength: 55 }}
          />
          <TextField
            name="username"
            label="Username"
            sx={loginTextFieldStyle}
            required
            onChange={handleCredentialsChange}
            inputProps={{ minLength: 3, maxLength: 55 }}
          />
          <TextField
            name="password"
            type="password"
            label="Password"
            sx={loginTextFieldStyle}
            required
            onChange={handleCredentialsChange}
            inputProps={{ minLength: 6, maxLength: 55 }}
          />
          <TextField
            name="confirmPassword"
            type="password"
            label="Re-enter Password"
            sx={loginTextFieldStyle}
            required
            onChange={handleCredentialsChange}
            inputProps={{ minLength: 6, maxLength: 55 }}
          />
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            sx={loginSubmitBtn}
          >
            Sign Up
          </Button>
        </Box>
      </form>
      <Typography
        variant="h6"
        sx={{ margin: '1rem' }}
        fontWeight={700}
        color="text.fourth"
      >
        Already a Member? Please &nbsp;
        <Link to="/" id="signup-link-text">
          Login
        </Link>
      </Typography>

      <Typography
        variant="h6"
        fontWeight={700}
        color="text.fourth"
        sx={{ margin: '1rem' }}
      >
        {successMsg}
      </Typography>
      <Typography
        variant="h6"
        fontWeight={700}
        color="text.error"
        sx={{ margin: '1rem' }}
      >
        {errorMsg}
      </Typography>
    </Box>
  );
};

export default SignUpPage;
