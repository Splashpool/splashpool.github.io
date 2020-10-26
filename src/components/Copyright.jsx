import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function Copyright() {
    return (
      <div >
    <Box mt={8}>
      <Typography variant="body2" align="center" style={{color: "rgba(255, 255, 255, 0.54)"}}>
        {'Copyright © '}
        <Link color="inherit" href="/">
          Splashpool
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
      </Box>
      </div>
    );
  }


export default Copyright;