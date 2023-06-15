const loginPageStyle = {
  width: {
    xs: '100%',
    sm: '80%',
    md: '85%',
    lg: '88%',
  },
  minHeight: '100vh',
  margin: '0 auto',
  padding: { xs: '25% 0 0', sm: '0' },
  display: 'flex',
  flexDirection: 'column',
  justifyContent: { xs: 'start', sm: 'center' },
  alignItems: 'center',
};

export const signupPageStyle = {
  width: {
    xs: '100%',
    sm: '80%',
    md: '85%',
    lg: '88%',
  },
  minHeight: '100vh',
  margin: '0 auto',
  padding: { xs: '10% 0 0', sm: '0' },
  display: 'flex',
  flexDirection: 'column',
  justifyContent: { xs: 'start', sm: 'center' },
  alignItems: 'center',
};

export const loginFormContainerStyle = {
  marginTop: '2rem',
  display: 'grid',
  gap: '1rem',
  gridTemplateColumns: {
    xs: '1fr',
    md: '1fr 1fr 1fr',
  },
};

export const loginTextFieldStyle = {
  border: '2px solid #96bf01',
  borderRadius: '50px',
  input: { color: '#96bf01', fontWeight: '800', textAlign: 'center' },
  '.MuiInputLabel-formControl': {
    color: '#96bf01',
    padding: 'none',
    margin: 'none',
    fontWeight: 800,
  },
  width: { xs: '15rem', md: '13rem' },

  '.MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
};

export const loginSubmitBtn = {
  width: { xs: '15rem', md: '10rem' },
  margin: { xs: '1rem 0', md: '0 1rem' },
  border: '2px solid #96bf01',
  borderRadius: '50px',
  fontWeight: 800,
  padding: '1rem',
  color: 'text.first',
  '&:hover': {
    background: '#ffffff',
    color: 'text.fourth',
  },
};

export default loginPageStyle;
