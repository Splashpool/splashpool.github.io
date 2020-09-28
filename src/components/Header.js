import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function Header() {
    return (
        <div className="Header">
            <Typography variant="h2" component="h1" gutterBottom className="custom-font">
                Welcome to Oasis
            </Typography>
            <Typography variant="body1" gutterBottom>
                Find for your nearest drinking water and toilet facilities
            </Typography>
            <Button variant="contained" color="primary">Search locations
            </Button>
        </div>
    );
}

export default Header;
