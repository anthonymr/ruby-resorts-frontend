import { Box, List, ListItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import logoImage from '../../styles/images/app_logo.jpeg';

const NavigationPanel = () => (
  <Box
    sx={{
      display: { xs: 'none', sm: 'flex' },
      flexDirection: { sm: 'column' },
      width: {
        sm: '20%',
        md: '15%',
        lg: '12%',
      },
      border: 'solid 2px red',
      height: '100vh',
    }}
  >
    <Box>
      <img id="nav-app-logo" src={logoImage} alt="Ruby resorts logo" />
    </Box>
    <List id="nav-panel-list">
      <ListItem>
        <NavLink to="/">Suites</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="reservepage">Reserve</NavLink>
      </ListItem>
    </List>
  </Box>
);

export default NavigationPanel;
