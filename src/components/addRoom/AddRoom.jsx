import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Container,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Snackbar,
} from '@mui/material';
import { useAddNewRoomMutation } from '../../services/apiService';
import { addRoomReducer } from '../../redux/mainPage/roomsSlice';

async function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const AddRoom = () => {
  const [roomData, setRoomData] = useState({
    name: '',
    price: '',
    reservationPrice: '',
    reservationFee: '',
    rating: '',
    description: '',
    image: null,
  });

  const [nameError, setNameError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');

  const dispatch = useDispatch();

  const [addNewRoom, { isLoading }] = useAddNewRoomMutation();

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    if (['price', 'reservationPrice', 'reservationFee'].includes(name)) {
      const numericValue = Number(value);
      if (numericValue <= 0) {
        return;
      }
    } else if (name === 'rating') {
      const numericValue = Number(value);
      if (numericValue < 0 || numericValue > 5) {
        return;
      }
    }
  
    setRoomData({ ...roomData, [name]: value });
  };
  
  
  

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const base64 = await fileToBase64(file);
        setRoomData({ ...roomData, image: base64 });
      } catch (error) {
        console.error('Error converting file to base64:', error);
      }
    }
  };

  const validateForm = () => {
    let valid = true;

    if (roomData.name.length < 3 || roomData.name.length > 55) {
      setNameError('Name should be between 3 and 55 characters');
      valid = false;
    } else {
      setNameError('');
    }

    if (roomData.description.length < 10 || roomData.description.length > 500) {
      setDescriptionError('Description should be between 10 and 500 characters');
      valid = false;
    } else {
      setDescriptionError('');
    }

    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const formData = new FormData();
    formData.append('room[name]', roomData.name);
    formData.append('room[full_price]', roomData.price);
    formData.append('room[reservation_price]', roomData.reservationPrice);
    formData.append('room[reservation_fee]', roomData.reservationFee);
    formData.append('room[rating]', roomData.rating);
    formData.append('room[description]', roomData.description);
    formData.append('image', roomData.image);

    try {
      const { data } = await addNewRoom(formData);
      dispatch(addRoomReducer(data));
      setRoomData({
        name: '',
        price: '',
        reservationPrice: '',
        reservationFee: '',
        rating: '',
        description: '',
        image: null,
      });
      setSuccessMessage('Room created successfully.');
    } catch (error) {
      console.error('Error adding new room:', error);
      setErrorMessage('Failed to create room. Please try again.');
    }
  };

  const handleSnackbarClose = () => {
    setSuccessMessage('');
    setErrorMessage('');
  };

  return (
    <Container maxWidth="sm">
      <Typography gutterBottom variant="h3" align="center">
        Ruby Resorts
      </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: '20px 5px', margin: '0 auto' }}>
          <CardContent>
            <Typography sx={{ fontWeight: 'bold', fontSize: '30px' }} gutterBottom variant="h5">
              Add New Room
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    required
                    name="name"
                    value={roomData.name}
                    onChange={handleChange}
                    error={!!nameError}
                    helperText={nameError}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    type="number"
                    label="Price"
                    variant="outlined"
                    fullWidth
                    required
                    name="price"
                    value={roomData.price}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    type="number"
                    label="Reservation Price"
                    variant="outlined"
                    fullWidth
                    required
                    name="reservationPrice"
                    value={roomData.reservationPrice}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    type="number"
                    label="Reservation Fee"
                    variant="outlined"
                    fullWidth
                    required
                    name="reservationFee"
                    value={roomData.reservationFee}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    type="number"
                    label="Rating"
                    variant="outlined"
                    fullWidth
                    required
                    name="rating"
                    value={roomData.rating}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Description"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    required
                    name="description"
                    value={roomData.description}
                    onChange={handleChange}
                    error={!!descriptionError}
                    helperText={descriptionError}
                  />
                </Grid>
                <Grid item xs={12}>
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    fullWidth
                    sx={{ borderRadius: '20px', color: 'white', fontSize: '20px' }}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Adding...' : 'Submit'}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
      <Snackbar
        open={!!successMessage || !!errorMessage}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        message={successMessage || errorMessage}
      />
    </Container>
  );
};

export default AddRoom;
