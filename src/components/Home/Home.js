import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Home.css";
import image from "../../assets/images/oasis-logo.svg";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function Header() {
  return (
    <div className="Header" style={{ padding: 20 }}>
      <Grid container spacing={0}>
        <Grid item md></Grid>
        <Grid item xs={12} md={6}>
        <FontAwesomeIcon icon="hand-holding-water" className="spl--pb" />
        <img src={image}/>
      <Typography
            variant="h2"
            component="h1"
            gutterBottom
            className="spl--pb"
          >
            Welcome to Oasis
      </Typography>
          <Typography variant="body1" gutterBottom className="spl--pb">
            Find for your nearest drinking water and toilet facilities
      </Typography>
          <Link to="/search" style={{ textDecoration: 'none' }}> 
            <Button variant="contained" color="primary" >
              Search locations
            </Button>
          </Link>
          </Grid>
          <Grid item md></Grid>
        </Grid>
    </div>
  );
}

export default Header;
