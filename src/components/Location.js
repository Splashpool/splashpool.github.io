import React from "react";
import Grid from '@material-ui/core/Grid';
import LocationDetails from "./LocationDetails";

import { Link } from 'react-router-dom';


function Location({ locations }) {


    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                {locations.name}
            </Grid>
            <Grid item xs={12}>
                {locations.status}
            </Grid>
            <Grid item xs={12}>
                <ul>
                <li key={locations.id}>
                    <Link to={`/location-details/${locations.id}`}>{locations.id}</Link>
                </li>
                </ul>
            </Grid>
        </Grid>
    );
}

export default Location;
