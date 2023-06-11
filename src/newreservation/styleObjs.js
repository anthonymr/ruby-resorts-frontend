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
  padding: '0',
  color: 'text.first',
  fontWeight: '700',
  width: { xs: '15rem', md: '10rem' },
  '.MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(228, 219, 233, 0.25)',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(228, 219, 233, 0.25)',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(228, 219, 233, 0.25)',
  },
  '.MuiSvgIcon-root ': {
    fill: 'white !important',
  },
};

export const datePickerStyle = {
  border: '2px solid #ffffff',
  borderRadius: '50px',
  padding: '0',
  color: 'text.first',
  fontWeight: '700',
  width: { xs: '15rem', md: '10rem' },
  '.MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(228, 219, 233, 0.25)',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(228, 219, 233, 0.25)',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(228, 219, 233, 0.25)',
  },
  '.MuiSvgIcon-root ': {
    fill: 'white !important',
  },
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
  padding: '0.5rem',
  color: 'text.fourth',
  '&:hover': {
    background: '#96bf01',
    color: 'text.first',
  },
};

export default selectStyle;
