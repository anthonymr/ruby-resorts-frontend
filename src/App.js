import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Layout from './components/layout';
import MainPage from './components/mainpage/mainPage';
import LoginPage from './components/loginpage/loginPage';
import ReservePage from './newreservation/newReservePage';

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
        <Route index element={<MainPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
      <Route path="newreservepage/:roomId" element={<ReservePage />} />
    </Routes>
  </Box>
);

export default App;
