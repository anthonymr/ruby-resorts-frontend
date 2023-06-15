import {
  Box, Button, List, ListItem, Typography,
} from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { logoutUser } from '../../redux/login/userSlice';
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (status.isSuccess) {
      dispatch(logoutUser());
      navigate('/');
    }
  }, [navigate, dispatch, status]);
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
            </>
          )}
        </List>
      </Box>
      <Box sx={{ margin: '1rem 0' }}>
        <Button
          onClick={handleLogout}
          sx={{
            background: '#96bf01',
            color: '#ffffff',
            fontWeight: '900',
            fontSize: '1rem',
            width: '100%',
            padding: '0.7rem 0',
            margin: '1rem 0',
            borderRadius: 0,
            '&:hover': {
              background: '#96bf01',
              color: '#ffffff',
            },
          }}
        >
          Logout
        </Button>
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
