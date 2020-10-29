import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";

import { getLocation } from '../store/location/locationAction';
import { locationList } from '../store/location/locationSelector';

const SingleLoaction = ({ match }) => {
    let { locationId } = match.params;
    const dispatch = useDispatch();
    const locationListSelector = useSelector(locationList);
    let locationData;

    const getLocationList = useCallback(() => {
        dispatch(getLocation());
    }, [dispatch]);
    useEffect(() => {
        getLocationList();
    }, [getLocationList]);

    if (locationListSelector) {
        locationData = locationListSelector.filter((location) => location.locationId === parseInt(locationId))[0];
    }
    if (locationData) {

        return (
            <div>
                <Grid container spacing={0}>
                    <Grid item md></Grid>
                    <Grid item xs={12} md={8}>
                        <Typography
                            variant="h4"
                            component="h1"
                            gutterBottom
                            className="spl--pb spl--pt"
                        >
                            {locationData.locationName}

                        </Typography>
                        <img src={locationData.pictureURL} alt={locationData.locationName} className="responsive" />
                        <Typography variant="body1" gutterBottom className="spl--pt">
                            {locationData.address1}
                        </Typography>
                        <Typography variant="body1" gutterBottom className="spl--pb">
                            {locationData.postCode}
                        </Typography>
                    </Grid>
                    <Grid item md></Grid>
                </Grid>
            </div>
        )
    } return (
        <Grid container spacing={0}>
            <Grid item md></Grid>
            <Grid item xs={12} md={8}>
                <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                    className="spl--pb spl--pt"
                >
                    Location not found
                        </Typography>
            </Grid>
            <Grid item md></Grid>
        </Grid>
    )
};

export default SingleLoaction;
