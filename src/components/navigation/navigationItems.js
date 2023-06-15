import {
  Box, Button, List, ListItem, Typography,
} from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import TwitterIcon, {
  FacebookIcon,
  InstagramIcon,
  VimeoIcon,
  SnapIcon,
} from '../../utilities/icons';
import logoImage from '../../styles/images/app_logo.jpeg';
import { useDeleteUserTokenMutation } from '../../services/apiService';

const NavigationItems = () => {
  const { authStatus, userinfo } = useSelector((state) => state.user);
  const loggedin = authStatus === 'loggedin';
  const isAdmin = userinfo.role === 'admin';
  const [deleteUserToken, status] = useDeleteUserTokenMutation();
  console.log(status);
  const navigate = useNavigate();
  useEffect(() => {
    if (status.isSuccess) navigate('/');
  }, [status]);
  const handleLogout = () => {
    deleteUserToken();
  };

  return (
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
        {loggedin && (
          <Typography
            variant="h6"
            color="text.secondary"
            fontWeight={700}
            sx={{ textAlign: 'center' }}
          >
            {userinfo.username}
          </Typography>
        )}
        <List id="nav-panel-list">
          {loggedin && (
            <>
              <ListItem sx={{ margin: 0, padding: 0 }}>
                <NavLink to="mainpage">SUITES</NavLink>
              </ListItem>
              <ListItem sx={{ margin: 0, padding: 0 }}>
                <NavLink to="newreservepage/0">BOOK NOW</NavLink>
              </ListItem>
              <ListItem sx={{ margin: 0, padding: 0 }}>
                <NavLink to="myreservations">MY BOOKINGS</NavLink>
              </ListItem>
              {isAdmin && (
                <>
                  <ListItem sx={{ margin: 0, padding: 0 }}>
                    <NavLink to="add">ADD SUITE</NavLink>
                  </ListItem>
                  <ListItem sx={{ margin: 0, padding: 0 }}>
                    <NavLink to="delete">DELETE SUITE</NavLink>
                  </ListItem>
                </>
              )}

              <ListItem sx={{ margin: 0, padding: 0 }}>
                {/* <NavLink to="logoutpage">LOGOUT</NavLink> */}
                <Button color="secondary" onClick={handleLogout}>
                  Logout
                </Button>
              </ListItem>
            </>
          )}
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
};

export default NavigationItems;
