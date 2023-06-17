import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Select, MenuItem, Button, Box, Typography,
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
  usernameFieldStyle,
} from './styleObjs';
import { useAddNewReservationMutation } from '../../services/apiService';
import ConfirmationDialog from '../confrimationDialog';

const ReservationForm = () => {
  const { roomId } = useParams();
  const { userinfo } = useSelector((state) => state.user);
  const { hotels } = useSelector((state) => state.cities);
  const { rooms } = useSelector((state) => state.rooms);
  const [location, setLocation] = useState(0);
  const [room, setRoom] = useState(roomId);
  const [fromDate, setFromDate] = useState(dayjs());
  const [toDate, setToDate] = useState(dayjs().add(1, 'day'));
  const [errorMsg, setErrorMsg] = useState(' ');
  const [isOpen, setIsOpen] = useState(false);
  const [addNewReservation, status] = useAddNewReservationMutation();
  const navigate = useNavigate();
  const confirmMsg = 'Are you sure you want to proceed with the booking?';
  const [formdata, setFormdata] = useState({});

  useEffect(() => {
    if (status.isError) {
      setErrorMsg('Something went wrong. Please try again later');
    }

    if (status.isSuccess) {
      setTimeout(() => {
        navigate('/myreservations');
      }, 1000);
    }
  }, [navigate, status]);

  const handleRoomChange = (e) => {
    setRoom(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleOk = () => {
    addNewReservation(formdata);
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg(' ');
    const roomId = parseInt(room, 10);
    const hotelId = parseInt(location, 10);
    const from = fromDate.format('YYYY/MM/DD');
    const to = toDate.format('YYYY/MM/DD');
    if (roomId === 0) setErrorMsg('Please select a Suite');
    else if (hotelId === 0) setErrorMsg('Please select a Location');
    else {
      const data = {
        room_id: roomId,
        hotel_id: hotelId,
        start_date: from,
        end_date: to,
      };
      setFormdata(data);
      setIsOpen(true);
    }
  };

  return (
    <>
      <form id="reservation-form" method="post" onSubmit={handleSubmit}>
        <Box sx={innerFormContainer}>
          <Box sx={selectContainerStyle}>
            <Box sx={usernameFieldStyle}>{userinfo.username}</Box>

            <Select
              value={room}
              name="roomId"
              id="rooms-list"
              sx={selectStyle}
              onChange={handleRoomChange}
              data-testid="suite-select"
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
              name="hotelId"
              id="cities-list"
              sx={selectStyle}
              onChange={handleLocationChange}
              data-testid="location-select"
            >
              <MenuItem value={0}>
                <em>Location..</em>
              </MenuItem>
              {hotels.map((hotel) => (
                <MenuItem key={hotel.id} value={hotel.id} sx={menuItemStyle}>
                  {hotel.name}
                </MenuItem>
              ))}
            </Select>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                id="from-date-picker"
                name="fromDate"
                sx={datePickerStyle}
                label="From"
                format="YYYY/MM/DD"
                disablePast
                maxDate={fromDate.add(45, 'day')}
                onChange={(newFromDate) => setFromDate(newFromDate)}
              />

              <DatePicker
                id="to-date-picker"
                name="fromDate"
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
      <ConfirmationDialog
        ctext={confirmMsg}
        isOpen={isOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
      {status.isSuccess && (
        <Typography
          variant="h6"
          fontWeight={700}
          color="text.first"
          sx={{ marginTop: '1rem' }}
        >
          Reservation is successful
        </Typography>
      )}
      <Typography
        variant="h6"
        fontWeight={700}
        color="text.error"
        sx={{ marginTop: '2rem' }}
      >
        {errorMsg}
      </Typography>
    </>
  );
};

export default ReservationForm;
