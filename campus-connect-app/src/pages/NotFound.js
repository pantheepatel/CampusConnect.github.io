import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import { ErrorOutline } from '@mui/icons-material';

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' , marginBottom: '41px'}}>
      <ErrorOutline style={{ fontSize: 100, color: 'red' }} />
      <Typography variant="h4" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1">
        The page you are looking for does not exist.
      </Typography>
      <Button component={Link} to="/" variant="contained" color="primary">
        Go to Home
      </Button>
    </div>
  );
};

export default NotFoundPage;