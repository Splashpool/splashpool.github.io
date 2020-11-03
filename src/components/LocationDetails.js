import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Rating from "material-ui-rating";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { getLocation } from "../store/location/locationAction";
import { locationList } from "../store/location/locationSelector";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import DoneIcon from "@material-ui/icons/Done";

const LocationDetails = (features) => {
  let locationId = features.match.params.number;
  console.log("idddd", locationId);
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
    locationData = locationListSelector.filter(
      (location) => location.locationId === parseInt(locationId)
    )[0];
  }

  if (locationData) {
    console.log("data  ", locationData);
    let drinkable = "";
    if (locationData.drinkable === true) {
      drinkable = "Drinkable";
    } else {
      drinkable = "Needs treatment";
    }
    return (
      <Grid container spacing={0}>
        <Grid item md></Grid>
        <Grid item xs={12}>
          {/* <CardContent> */}
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            className="spl--pb spl--pt"
          >
            {locationData.locationName}
          </Typography>
          <Grid container justify="flex-end" className="spl--pb">
          <Button color="primary" variant="contained">
            Report a problem
          </Button>
          </Grid>
          <div className="spl--pb">
            <img
              src={locationData.pictureURL}
              alt={locationData.locationName}
              className="responsive"
            />
          </div>
          <Grid container spacing={0}>
            <Grid item xs={2}>
              <Typography variant="h6" component="h4">
                Rating
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Rating
                value={locationData.rating}
                max={5}
                onChange={(value) => console.log(`Rated with value ${value}`)}
              />
            </Grid>
          </Grid>

          <List component="nav" aria-label="location status">
            <Divider />
            <ListItem>
              <ListItemIcon>
                <DoneIcon fontSize="large" color="primary" />
              </ListItemIcon>
              <ListItemText primary={drinkable} />
            </ListItem>
            <Divider />
            <ListItem divider>
              <ListItemText inset primary="Needs Treatment" />
            </ListItem>
            <ListItem>
              <ListItemText inset primary="Unknown" />
            </ListItem>
          </List>

          <Typography variant="h6" component="h3" className="spl--pb spl--pt">
            Address
          </Typography>
          <Typography variant="body1" gutterBottom>
            {locationData.address1}
            <br></br>
            {locationData.city}
            <br></br>
            {locationData.country}
            <br></br>
            {locationData.postCode}
            <br></br>
          </Typography>
        </Grid>
        <Grid item md></Grid>
      </Grid>
    );
  } else {
    return (
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Typography variant="h5">loading .....</Typography>
        </Grid>
      </Grid>
    );
  }
};

export default LocationDetails;
