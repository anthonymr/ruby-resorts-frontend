import './App.css';
import { Box } from '@mui/material';

const App = () => (
  <div className="App">
    <Box
      sx={{
        border: { xs: 'solid 1px black', lg: 'solid 1px blue' },
      }}
    >
      Hello
    </Box>
  </div>
);

export default App;
