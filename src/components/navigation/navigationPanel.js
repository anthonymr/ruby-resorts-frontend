import { useState } from 'react';
import { Box, Button, Drawer } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import NavigationItems from './navigationItems';

const NavigationPanel = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const handleToggleDrawer = () => {
    setMobileMenu((prevState) => !prevState);
  };
  const drawerWidth = '75%';
  const container = undefined;

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
        sx={{ display: { sm: 'none' }, position: 'absolute', left: 0 }}
      >
        <MenuRoundedIcon
          fontSize="large"
          color="secondary"
          sx={{
            stroke: '#96bf01',
            strokeWidth: 1,
          }}
        />
      </Button>
      <Box component="nav">
        <Drawer
          container={container}
          anchor="left"
          variant="temporary"
          open={mobileMenu}
          onClose={handleToggleDrawer}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
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
