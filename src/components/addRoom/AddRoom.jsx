import React from 'react'
import { Container, Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material';
const handleSubmit = ()=>{
}

const AddRoom = () => {
  return (
    <Container maxWidth="sm">
    <Typography gutterBottom variant="h3" align="center">
      Ruby Resorts
     </Typography>
    <Grid>
      <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
        <CardContent>
          <Typography gutterBottom variant="h5">
          Add New Room
        </Typography> 
          <form onSubmit={handleSubmit}>
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <TextField placeholder="Enter room name" label="Name" variant="outlined" fullWidth required />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField placeholder="Enter full Price" label="Price" type="number" variant="outlined" fullWidth required />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField type="number" placeholder="Reservation Price" label="Reservation Price" variant="outlined" fullWidth required />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField type="number" placeholder="Enter Reservation Fee" label="Reservation Price" variant="outlined" fullWidth required />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField type="number" placeholder="Between 1 to 5" label="Rating" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Description" multiline rows={4} placeholder="Type your description here" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12}>
              <input type="file"  name="roomimage" accept="image/*" />              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
              </Grid>

            </Grid>
          </form>
        </CardContent>
      </Card>
    </Grid>
  </Container>
  )
}

export default AddRoom
