import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './Header.css';

function Header() {
    return (
        <div className="Header">
            <Typography variant="h1" component="h2" gutterBottom className="custom-font">
                Welcome to Oasis
            </Typography>
            <Typography variant="body1" gutterBottom>
                Find for your nearest drinking water and toilet facilities
            </Typography>
            <Button variant="contained" color="primary">Search locations
            </Button>
            <p>Sample text</p>
        </div>
    );
}

export default Header;
