import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Search from './Search';
import { MemoryRouter as Router } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';

const LinkBehavior = React.forwardRef((props, ref) => (
    <RouterLink ref={ref} to="/search" {...props} />
));

function Header() {
    return (
        <Router>
            <div className="Header">
                <Typography variant="h2" component="h1" gutterBottom className="custom-font">
                    Welcome to Oasis
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Find for your nearest drinking water and toilet facilities
                </Typography>
                <Button variant="contained" color="primary" component={LinkBehavior}>Search locations
                </Button>
            </div>
        </Router>
    );
}

export default Header;
