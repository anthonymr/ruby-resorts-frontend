import {
  Box,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import loginPageStyle, { loginFormContainerStyle, loginSubmitBtn, loginTextFieldStyle } from './loginStyleObjs';

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Box
      sx={loginPageStyle}
    >
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
          <TextField id="username" label="Username" sx={loginTextFieldStyle} />
          <TextField id="password" type="password" label="password" sx={loginTextFieldStyle} />
          <Button type="submit" color="secondary" variant="contained" sx={loginSubmitBtn}>
            Log In
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default LoginPage;
