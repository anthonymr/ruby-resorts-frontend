import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Container, Grid, TextField, Button, Card, CardContent, Typography,
} from '@mui/material';
import { useAddNewRoomMutation } from '../../services/apiService';
import { getRoomsList } from '../../redux/mainPage/roomsSlice';

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

  const dispatch = useDispatch();

  const [addNewRoom, { isLoading }] = useAddNewRoomMutation();

  const handleSubmission =  (formData) => {
    try {
      const { data } = addNewRoom(formData);
      dispatch(getRoomsList(data));
      setRoomData({
        name: '',
        price: '',
        reservationPrice: '',
        reservationFee: '',
        rating: '',
        description: '',
        image: null,
      });
    } catch (error) {
      console.error('Error adding new room:', error);
    }
  };

  const handleChange = (e) => {
    setRoomData({ ...roomData, [e.target.name]: e.target.value });
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', roomData.name);
    formData.append('full_price', roomData.price);
    formData.append('reservation_price', roomData.reservationPrice);
    formData.append('reservation_fee', roomData.reservationFee);
    formData.append('rating', roomData.rating);
    formData.append('description', roomData.description);
    formData.append('image', roomData.image);

    handleSubmission(formData);
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
              <Grid container spacing={1}>
                <Grid xs={12} item>
                  <TextField
                    placeholder="Enter room name"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    required
                    name="name"
                    value={roomData.name}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter full Price"
                    label="Price"
                    type="number"
                    variant="outlined"
                    fullWidth
                    required
                    name="price"
                    value={roomData.price}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    type="number"
                    placeholder="Reservation Price"
                    label="Reservation Price"
                    variant="outlined"
                    fullWidth
                    required
                    name="reservationPrice"
                    value={roomData.reservationPrice}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    type="number"
                    placeholder="Enter Reservation Fee"
                    label="Reservation Price"
                    variant="outlined"
                    fullWidth
                    required
                    name="reservationFee"
                    value={roomData.reservationFee}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    type="number"
                    placeholder="Between 1 to 5"
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
                    placeholder="Type your description here"
                    variant="outlined"
                    fullWidth
                    required
                    name="description"
                    value={roomData.description}
                    onChange={handleChange}
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
    </Container>
  );
};

export default AddRoom;
