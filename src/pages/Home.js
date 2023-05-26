import React from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const App = () => {
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Hotel Booking
      </Typography>
      <form>
        <TextField label="Check-in Date" fullWidth margin="normal" type="date" />
        <TextField label="Check-out Date" fullWidth margin="normal" type="date" />
        <TextField label="Number of Guests" fullWidth margin="normal" type="number" />
        <TextField label="Room Type" fullWidth margin="normal" />
        <Button variant="contained" color="primary" fullWidth>
          Book Now
        </Button>
      </form>
    </Container>
  );
};

export default App;
