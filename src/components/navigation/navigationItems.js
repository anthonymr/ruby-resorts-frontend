import {
  Box,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import TwitterIcon, {
  FacebookIcon,
  InstagramIcon,
  VimeoIcon,
  SnapIcon,
} from '../../utilities/icons';
import logoImage from '../../styles/images/app_logo.jpeg';

const NavigationItems = () => (
  <Box
    sx={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}
  >
    <Box>
      <Box
        sx={{
          padding: '1rem 0',
        }}
      >
        <img id="nav-app-logo" src={logoImage} alt="Ruby resorts logo" />
      </Box>
      <List id="nav-panel-list">
        <ListItem sx={{ margin: 0, padding: 0 }}>
          <NavLink to="/">SUITES</NavLink>
        </ListItem>
        <ListItem sx={{ margin: 0, padding: 0 }}>
          <NavLink to="newreservepage">RESERVE</NavLink>
        </ListItem>
      </List>
    </Box>
    <Box sx={{ margin: '1rem 0' }}>
      <Box
        id="nav-social-icons"
        sx={{
          padding: '0.5rem',
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
        <VimeoIcon />
        <SnapIcon />
      </Box>
      <Typography variant="subtitle1" textAlign="center" color="text.second">
        Ruby Resorts Inc.
      </Typography>
    </Box>
  </Box>
);

export default NavigationItems;
