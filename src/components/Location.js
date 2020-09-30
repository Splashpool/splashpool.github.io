import React from "react";
import Grid from "@material-ui/core/Grid";
import LocationDetails from "./LocationDetails";

import { Link } from 'react-router-dom';


function Location({ locations }) {


    return (

        <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
                {locations.name}
            </Grid>
            <Grid item xs={12} md={2}>
                {locations.status}
            </Grid>
            <li key={locations.id}>
                <Link to={`/location-details/${locations.id}`}>{locations.id}</Link>
            </li>

        </Grid>

    );
}

export default Location;
