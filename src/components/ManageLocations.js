import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, ListItemText } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';

import { getLocation, deleteLocation, updateLocationStatus } from '../store/location/locationAction';
import { locationList, getLocationLoading, deleteLocationLoading, updateLocationLoading } from '../store/location/locationSelector';
import AddLocation from './AddLocation';

export default function ListLocation() {
    const dispatch = useDispatch();
    const locationListSelector = useSelector(locationList);
    const getLocationLoadingSelector = useSelector(getLocationLoading);
    const deleteLocationLoadingSelector = useSelector(deleteLocationLoading);
    const updateLocationLoadingSelector = useSelector(updateLocationLoading);
    const [deleteLocationId, setDeleteLocationId] = useState(null);
    const [updateLocationId, setUpdateLocationId] = useState(null);


    useEffect(() => {
        getLocationList();
    }, []);

    const getLocationList = () => {
        dispatch(getLocation());
    }

    const removeLocation = (location) => {
        setDeleteLocationId(location.locationId);
        dispatch(deleteLocation(location.locationId));
    }

    const updateLocationStatus = (location) => {
        setUpdateLocationId(location.locationId);
        dispatch(updateLocationStatus({
          ...location
        }))
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
                                    <Button variant="contained" color="primary" aria-label="update" onClick={() => updateLocationStatus(location)}>
                                        <FontAwesomeIcon icon="pen" />
                                        {updateLocationLoadingSelector && (location.locationId === updateLocationId) && <CircularProgress color="secondary" />}
                                    </Button>
                                    <Button variant="outlined" color="secondary" style={{marginLeft: '0.5rem'}} aria-label="delete" onClick={() => removeLocation(location)}>
                                        <FontAwesomeIcon icon="trash-alt" />
                                        {deleteLocationLoadingSelector && (location.locationId === deleteLocationId) && <CircularProgress color="secondary" />}
                                    </Button>
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