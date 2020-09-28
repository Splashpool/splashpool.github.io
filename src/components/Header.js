import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import waterDroplet from './images/water_droplet.png';
import './Header.css';

function Header() {
    return (
        <div className="Header spl--custom-colors">
            {/* need to sort out the icon and it's colors for background and foreground */}
            <img className="spl--custom-colors spl--custom-size" alt="water droplet" src={waterDroplet}/>
            <Typography variant="h1" component="h2" gutterBottom className="spl--custom-font spl--custom-colors">
                Welcome to Oasis
            </Typography>
            <Typography variant="body1" gutterBottom className="spl--custom-colors2">
                Find for your nearest drinking water and toilet facilities
            </Typography>
            <Button variant="contained" color="primary" className="spl--custom-colors">Search locations
            </Button>
        </div>
    );
}

export default Header;
