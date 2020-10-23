import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, ListItemText } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import DeleteIcon from '@material-ui/icons/Delete';
import LinearProgress from '@material-ui/core/LinearProgress';

import { getLocation } from '../store/location/locationAction';
import { locationList, getLocationLoading } from '../store/location/locationSelector';
import AddLocation from './AddLocation';

export default function ListLocation() {
    const dispatch = useDispatch();
    const locationListSelector = useSelector(locationList);
    const getLocationLoadingSelector = useSelector(getLocationLoading );


    useEffect(() => {
        getLocationList();
    }, []);

    const getLocationList = () => {
        dispatch(getLocation());
    }


    return (
        <div>
            <Grid container spacing={0}>
                <Grid item md></Grid>
                <Grid item xs={12} md={6}>
                    <Typography
                        variant="h3"
                        component="h1"
                        gutterBottom
                        className="spl--pb spl--pt"
                    >
                        Manage Locations
                    </Typography>
                    {!getLocationLoadingSelector && (locationListSelector.length === 0) && 
                    <Typography variant="body1" gutterBottom className="spl--pb">
                        Locations list empty.
                    </Typography>
                    }
                    {getLocationLoadingSelector && <LinearProgress />}

                    <AddLocation />
                    
                    <div>
                        <List>
                            {locationListSelector.map(location => (
                                <ListItem key={location.locationId}>
                                    <ListItemText primary={location.locationName} />
                                    <Button variant="contained" color="secondary" aria-label="delete">
                                        <FontAwesomeIcon icon="trash-alt" />
                                    </Button>
                                    {/* <Button
                                        variant="contained"
                                        color="secondary"
                                        startIcon={<DeleteIcon />}
                                    >
                                        Delete
                                    </Button> */}
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </Grid>
                <Grid item md></Grid>
            </Grid>
        </div>
    )
}
