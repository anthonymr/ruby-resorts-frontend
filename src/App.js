import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Layout from './components/layout';
import MainPage from './components/mainpage/mainPage';
import LoginPage from './components/loginPage/loginPage';
import SignUpPage from './components/signUpPage';
import ReservePage from './components/newReservationPage/newReservePage';
import Details from './components/detailspage/Details';
import AddRoom from './components/addRoom/AddRoom';
import DeleteRoom from './components/deleteRoomPage/DeleteRoom';
import MyReservations from './components/myReservationsPage/MyReservations';

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
        <Route path="/mainpage" element={<MainPage />} />
        <Route exact path="/details/:roomId" element={<Details />} />
        <Route exact path="/add" element={<AddRoom />} />
        <Route exact path="/delete" element={<DeleteRoom />} />
        <Route exact path="/myreservations" element={<MyReservations />} />
      </Route>
      <Route index element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/newreservepage/:roomId" element={<ReservePage />} />
    </Routes>
  </Box>
);

export default App;
