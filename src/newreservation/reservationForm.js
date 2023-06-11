import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Select,
  MenuItem,
  Button,
  Box,
} from '@mui/material';
import {
  DatePicker,
  LocalizationProvider,
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import selectStyle, {
  datePickerStyle,
  formSubmitStyle,
  innerFormContainer,
  menuItemStyle,
  selectContainerStyle,
} from './styleObjs';

const ReservationForm = () => {
  const { roomId } = useParams();
  const { cities } = useSelector((state) => state.cities);
  const { rooms } = useSelector((state) => state.rooms);
  const [location, setLocation] = useState(0);
  const [room, setRoom] = useState(roomId);
  const [fromDate, setFromDate] = useState(dayjs());
  const [toDate, setToDate] = useState(dayjs().add(1, 'day'));

  const handleRoomChange = (e) => {
    setRoom(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <form id="reservation-form" method="post">
      <Box sx={innerFormContainer}>
        <Box sx={selectContainerStyle}>
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
              value={fromDate}
              disablePast
              maxDate={fromDate.add(45, 'day')}
              onChange={(newFromDate) => setFromDate(newFromDate)}
            />
            <DatePicker
              id="to-date-picker"
              sx={datePickerStyle}
              value={toDate}
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
  );
};

export default ReservationForm;
