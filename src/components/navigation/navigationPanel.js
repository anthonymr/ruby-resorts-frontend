import { useState } from 'react';
import { Box, Button, Drawer } from '@mui/material';
import { MenuAltGreenIcon } from '../../utilities/icons';
import NavigationItems from './navigationItems';

const NavigationPanel = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const handleToggleDrawer = () => {
    setMobileMenu((prevState) => !prevState);
  };

  const mobileDrawer = (
    <Box
      onClick={handleToggleDrawer}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <NavigationItems />
    </Box>
  );

  return (
    <>
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          flexDirection: { sm: 'column' },
          width: {
            sm: '20%',
            md: '15%',
            lg: '12%',
          },
          borderRight: 'solid 1px #dcdcdc',
          height: '100vh',
        }}
      >
        <NavigationItems />
      </Box>
      <Button
        onClick={handleToggleDrawer}
        sx={{
          display: { sm: 'none' },
          position: 'absolute',
          left: '1rem',
          top: '1rem',
          zIndex: 99,
        }}
      >
        <MenuAltGreenIcon />
      </Button>
      <Box component="nav">
        <Drawer
          anchor="left"
          variant="temporary"
          open={mobileMenu}
          onClose={handleToggleDrawer}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: '75%',
            },
          }}
        >
          {mobileDrawer}
        </Drawer>
      </Box>
    </>
  );
};

export default NavigationPanel;
