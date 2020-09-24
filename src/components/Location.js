import React from 'react';
import Grid from '@material-ui/core/Grid';


function Location({ locations }) {


    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
                {locations.name}
            </Grid>
            <Grid item xs={12} md={2}>
                {locations.status}
            </Grid>
         
        </Grid>
    );
}

export default Location;
