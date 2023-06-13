import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Select,
  MenuItem,
  Button,
  Box,
  Typography,
  TextField,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import selectStyle, {
  datePickerStyle,
  formSubmitStyle,
  innerFormContainer,
  menuItemStyle,
  selectContainerStyle,
  textFieldStyle,
} from './styleObjs';

const ReservationForm = () => {
  const { roomId } = useParams();
  const { userinfo } = useSelector((state) => state.user);
  const { cities } = useSelector((state) => state.cities);
  const { rooms } = useSelector((state) => state.rooms);
  const [location, setLocation] = useState(0);
  const [room, setRoom] = useState(roomId);
  const [fromDate, setFromDate] = useState(dayjs());
  const [toDate, setToDate] = useState(dayjs().add(1, 'day'));
  const [errorMsg, setErrorMsg] = useState(' ');
  // const navigate = useNavigate();

  const handleRoomChange = (e) => {
    setRoom(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg(' ');
    const roomId = parseInt(room, 10);
    const hotelId = parseInt(location, 10);
    if (roomId === 0) setErrorMsg('Please select a Suite');
    else if (hotelId === 0) setErrorMsg('Please select a Location');
    console.log(fromDate.format('YYYY/MM/DD'));
    console.log(toDate.format('YYYY/MM/DD'));
    // navigate('/');
  };

  return (
    <>
      <form id="reservation-form" method="post" onSubmit={handleSubmit}>
        <Box sx={innerFormContainer}>
          <Box sx={selectContainerStyle}>
            <TextField
              id="username-input"
              defaultValue={userinfo.username}
              sx={textFieldStyle}
              InputProps={{
                inputProps: { style: { padding: '1rem' } },
                readOnly: true,
              }}
            />
            <Select
              value={room}
              id="rooms-list"
              sx={selectStyle}
              onChange={handleRoomChange}
            >
              <MenuItem value={0}>
                <em>Suite..</em>
              </MenuItem>
              {rooms.map((room) => (
                <MenuItem key={room.id} value={room.id} sx={menuItemStyle}>
                  {room.name}
                </MenuItem>
              ))}
            </Select>

            <Select
              value={location}
              id="cities-list"
              sx={selectStyle}
              onChange={handleLocationChange}
            >
              <MenuItem value={0}>
                <em>Location..</em>
              </MenuItem>
              {cities.map((city) => (
                <MenuItem key={city.id} value={city.id} sx={menuItemStyle}>
                  {city.name}
                </MenuItem>
              ))}
            </Select>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                id="from-date-picker"
                sx={datePickerStyle}
                label="From"
                format="YYYY/MM/DD"
                disablePast
                maxDate={fromDate.add(45, 'day')}
                onChange={(newFromDate) => setFromDate(newFromDate)}
              />
              <DatePicker
                id="to-date-picker"
                sx={datePickerStyle}
                label="To"
                format="YYYY/MM/DD"
                disablePast
                minDate={fromDate.add(1, 'day')}
                maxDate={toDate.add(45, 'day')}
                onChange={(newToDate) => setToDate(newToDate)}
              />
            </LocalizationProvider>
          </Box>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            sx={formSubmitStyle}
          >
            Book Now
          </Button>
        </Box>
      </form>
      <Typography variant="h6" color="text.first" sx={{ marginTop: '1rem' }}>
        {errorMsg}
      </Typography>
    </>
  );
};

export default ReservationForm;
