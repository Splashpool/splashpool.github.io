import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Rating from 'material-ui-rating';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { getLocation } from '../store/location/locationAction';
import { locationList } from '../store/location/locationSelector';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Box from '@material-ui/core/Box';


const LocationDetails = (features) => {

    let locationId = features.match.params.number;
    console.log('idddd', locationId);
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
        console.log('data  ', locationData);
        let drinkable = '';
        if (locationData.drinkable === true) {
            drinkable = 'Drinkable';
        } else {
            drinkable = 'Needs treatment';
        }
        return (

            <Grid container spacing={0}>
                <Grid item xs={12} sm={6}>


                    <img
                        className="spl-media"
                        src="https://images.freeimages.com/images/large-previews/113/water-from-spring-1426253.jpg"
                        //{`https://oasis-images.s3.eu-west-2.amazonaws.com/location-images/${locationData.locationId}.png`}
                        alt="img"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    {/* <CardContent> */}
                    <Typography variant="h5">{locationData.locationName}</Typography>

                    <Rating
                        value={locationData.rating}
                        max={5}
                        onChange={(value) => console.log(`Rated with value ${value}`)}
                    />

                    <Box display="flex" flexDirection="row">
                        <Box p={1}>
                            <CheckBoxIcon />
                        </Box>
                        <Box p={1} >
                            <Typography variant="h6">{drinkable}</Typography>
                        </Box>


                    </Box>
                    <Box component="span">
                        <Typography variant="body1" gutterBottom>
                            {locationData.address1}<br></br>
                            {locationData.city}<br></br>
                            {locationData.country}<br></br>
                            {locationData.postCode}<br></br>
                        </Typography>
                    </Box>

                </Grid>
                <Grid item xs={12}>
                    <Button size="small" color="primary">
                        Report a problem
                        </Button>
                    <Button size="small" variant="contained" color="primary" disableElevation>
                        Notify me
                        </Button>
                </Grid>
            </Grid>

        )
    } else {
        return (

            <Grid container spacing={0}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h5">loading .....</Typography>

                </Grid>
            </Grid>
        );
    }

}

export default LocationDetails;