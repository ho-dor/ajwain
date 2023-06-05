import React from 'react';
import { Typography, Container, Box, Button, Toolbar, AppBar } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container disableGutters>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Ajwain
          </Typography>
          <Box sx={{ flexGrow: 1 }} /> {/* This pushes everything after it to the right */}
          {/* Add other components here */}
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          textAlign: 'center',
          bgcolor: 'background.paper',
          pt: 8,
          pb: 8,
        }}
      >
        <img src="./leaf.webp" alt="Ajwain logo" />
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Ajwain
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          The best tool to manage your projects
        </Typography>
        <Box sx={{ mt: 5 }}>
          <Link to="/login">
            {' '}
            <Button variant="contained" size="large">
              Get Started
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
