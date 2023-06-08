import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import NavigationPanel from './components/navigation/navigationPanel';
import MainPage from './components/mainPage';
import ReservePage from './components/reservePage';

const App = () => (
  <Box
    id="App"
    sx={{
      display: { sx: 'block', sm: 'flex' },
      position: 'relative',
    }}
  >
    <NavigationPanel />
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="reservepage" element={<ReservePage />} />
    </Routes>
  </Box>
);

export default App;
