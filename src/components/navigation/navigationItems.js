import { Box, List, ListItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/FacebookRounded';
import logoImage from '../../styles/images/app_logo.jpeg';

const NavigationItems = () => (
  <Box sx={{ width: '100%' }}>
    <Box sx={{ padding: '2rem 0', display: 'flex', justifyContent: 'center' }}>
      <img id="nav-app-logo" src={logoImage} alt="Ruby resorts logo" />
    </Box>
    <List id="nav-panel-list">
      <ListItem sx={{ margin: 0, padding: 0 }}>
        <NavLink to="/">SUITES</NavLink>
      </ListItem>
      <ListItem sx={{ margin: 0, padding: 0 }}>
        <NavLink to="reservepage">RESERVE</NavLink>
      </ListItem>
    </List>
    <Box>
      <Box>
        <FacebookIcon fontSize="large" />
      </Box>
    </Box>
  </Box>
);

export default NavigationItems;
