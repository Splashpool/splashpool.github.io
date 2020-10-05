import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './Copyright.css';

function Copyright() {
    return (
    <Box mt={8}>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="/">
          Splashpool
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
      </Box>
    );
  }


export default Copyright;