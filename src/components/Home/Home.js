import React from "react";
import { Link} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Home.css";

function Header() {
  var search = document.getElementById("geocoder");
  // remove search from nav  bar
  if (search) {
    search.removeChild(search.childNodes[0]);
  }

  return (
    <div className="Header" style={{ padding: 20 }}>
      <Grid container spacing={0}>
        <Grid item md></Grid>
        <Grid item xs={12} md={6}>
          <FontAwesomeIcon icon="hand-holding-water" className="spl--pb" />

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
