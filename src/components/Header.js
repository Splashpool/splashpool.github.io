import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import waterDroplet from './images/water_droplet.png';
import './Header.css';

function Header() {
    return (
        <div className="Header">
            <img className="custom-colors custom-size" src={waterDroplet}/>
            <Typography variant="h1" component="h2" gutterBottom className="custom-font custom-colors">
                Welcome to Oasis
            </Typography>
            <Typography variant="body1" gutterBottom className="custom-colors2">
                Find for your nearest drinking water and toilet facilities
            </Typography>
            <Button variant="contained" color="primary" className="custom-colors">Search locations
            </Button>
        </div>
    );
}

export default Header;
