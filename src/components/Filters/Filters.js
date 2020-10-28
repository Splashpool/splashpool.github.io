import React from "react";
import { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import SwitchesGroup from "./SwitchesGroup";
import MapView from "../MapView";

import { useDispatch, useSelector } from "react-redux";
import { locationList } from "../../store/location/locationSelector";
import { getLocation } from "../../store/location/locationAction";

function Filter({ searchString }) {
  const [state, setState] = React.useState({
    waterFacilities: [],
    toiletFacilities: [],
    water: true,
    toilet: true,
  });

  const dispatch = useDispatch();
  const locationListSelector = useSelector(locationList);
  //const getLocationLoadingSelector = useSelector(getLocationLoading);

  const getLocationList = () => {
    dispatch(getLocation());
  };

  useEffect(() => {
    getLocationList();
  }, [getLocationList]);

  const waterLocations = locationListSelector.filter(
    (location) => location.water === true
  );

  const toiletLocations = locationListSelector.filter(
    (location) => (location.femaleToilets || location.maleToilets) === true
  );
  console.log("waterlocations", waterLocations);

  //  setState({ ...state, waterFacilities: waterLocations });
  //  setState({ ...state, toiletFacilities: toiletLocations });

  const filterResults = () => {
    console.log("FilterResults function called from switches group");
  };

  return (
    <Grid container id="container">
      <Grid item xs={12} md={12}>
        <MapView searchString={searchString} />
      </Grid>
      <Grid item xs={12} md={12}>
        <SwitchesGroup filterResults={filterResults} />
      </Grid>
    </Grid>
  );
}

export default Filter;
