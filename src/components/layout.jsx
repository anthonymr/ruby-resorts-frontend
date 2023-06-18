import { Outlet } from 'react-router-dom';
import NavigationPanel from './navigation/navigationPanel';

const Layout = () => (
  <>
    <NavigationPanel />
    <Outlet />
  </>
);

export default Layout;
