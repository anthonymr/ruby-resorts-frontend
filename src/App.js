import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Layout from './components/layout';
import MainPage from './components/mainpage/mainPage';
import LoginPage from './components/loginPage/loginPage';
import LogoutPage from './components/logoutPage';
import ReservePage from './components/newreservationPage/newReservePage';
import Details from './components/detailspage/Details';
import AddRoom from './components/addRoom/AddRoom';
import DeleteRoom from './components/deleteRoom/DeleteRoom';
import MyReservations from './components/myReservations/MyReservations';

const App = () => (
  <Box
    id="App"
    sx={{
      display: { sx: 'block', sm: 'flex' },
      position: 'relative',
    }}
  >
    <Routes>
      <Route element={<Layout />}>
        <Route path="newreservepage/:roomId" element={<ReservePage />} />
        <Route path="mainpage" element={<MainPage />} />
        <Route exact path="/details/:roomId" element={<Details />} />
        <Route exact path="/add" element={<AddRoom />} />
        <Route exact path="/delete" element={<DeleteRoom />} />
        <Route exact path="/myreservations" element={<MyReservations />} />
      </Route>
      <Route index element={<LoginPage />} />
      <Route path="logoutpage" element={<LogoutPage />} />
    </Routes>
  </Box>
);

export default App;
