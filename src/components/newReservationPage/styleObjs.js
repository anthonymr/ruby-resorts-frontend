export const innerFormContainer = {
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  alignItems: { md: 'start' },
};

export const selectContainerStyle = {
  display: 'grid',
  gap: '1rem',
  gridTemplateColumns: {
    xs: '1fr',
    md: '1fr 1fr',
    lg: '1fr 1fr 1fr',
    xl: '1fr 1fr 1fr 1fr',
  },
};

const selectStyle = {
  border: '2px solid #ffffff',
  borderRadius: '50px',
  color: 'text.first',
  padding: '0.5rem',
  fontWeight: '700',
  width: { xs: '15rem', md: '13rem' },
  '.MuiSvgIcon-root ': {
    fill: 'white !important',
  },
};

export const datePickerStyle = {
  border: '2px solid #ffffff',
  borderRadius: '50px',
  input: { color: '#ffffff', fontWeight: '600' },
  '.MuiInputLabel-formControl': {
    color: '#ffffff',
    padding: 'none',
    margin: 'none',
    fontWeight: 800,
  },
  width: { xs: '15rem', md: '13rem' },

  '.MuiOutlinedInput-notchedOutline': {
    borderRadius: '50px',
  },

  '.MuiSvgIcon-root ': {
    fill: 'white !important',
  },
};

export const textFieldStyle = {
  border: '2px solid #ffffff',
  borderRadius: '50px',
  input: { color: '#ffffff', fontWeight: '800' },
  '.MuiInputLabel-formControl': {
    color: '#ffffff',
    padding: 'none',
    margin: 'none',
    fontWeight: 800,
  },
  width: { xs: '15rem', md: '13rem' },

  '.MuiOutlinedInput-notchedOutline': {
    borderRadius: '50px',
  },
};

export const usernameFieldStyle = {
  border: '2px solid #ffffff',
  borderRadius: '50px',
  color: '#ffffff',
  fontWeight: '800',
  padding: '1rem 0rem',
  width: { xs: '15rem', md: '13rem' },
};

export const menuItemStyle = {
  border: 'none',
  fontWeight: '700',
  '&:hover': {
    color: '#96bf01',
  },
};

export const formSubmitStyle = {
  width: { xs: '15rem', md: '10rem' },
  margin: { xs: '1rem 0', md: '0 1rem' },
  border: '2px solid #ffffff',
  borderRadius: '50px',
  fontWeight: 700,
  padding: '1rem',
  color: 'text.fourth',
  '&:hover': {
    background: '#96bf01',
    color: 'text.first',
  },
};

export default selectStyle;
