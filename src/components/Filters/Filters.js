import React, { useState, useEffect, useCallback } from "react";
import Grid from "@material-ui/core/Grid";
//import SwitchesGroup from "./SwitchesGroup";
import MapView from "../MapView";

import { useDispatch, useSelector } from "react-redux";
import { locationList } from "../../store/location/locationSelector";
import { getLocation } from "../../store/location/locationAction";

function Filter({ searchString }) {
//   const [state, setState] = useState({
//     waterFacilities: [],
//     toiletFacilities: [],
//     water: true,
//     toilet: true,
//   });

//   const dispatch = useDispatch();
//   const locationListSelector = useSelector(locationList);

//   const getLocationList = useCallback(() => {
//     dispatch(getLocation());
//   }, [dispatch]);
//   useEffect(() => {
//     getLocationList();
//   }, [getLocationList]);

//   const waterLocations = locationListSelector.filter(
//     (location) => location.water === true
//   );

//   const toiletLocations = locationListSelector.filter(
//     (location) => (location.femaleToilets || location.maleToilets) === true
//   );
//  // console.log("waterlocations", waterLocations);

  // const filterResults = (water, toilet) => {
  //   console.log("FilterResults water:", water);
  //   console.log("FilterResults toilet:", toilet);
  //   if (!water) {
  //     setState({ ...state, waterFacilities: [] });
  //     setState({ ...state, water: false });
  //   } else if (!toilet) {
  //     setState({ ...state, toiletFacilities: [] });
  //     setState({ ...state, toilet: false });
  //   } else {
  //     setState({ ...state, waterFacilities: waterLocations });
  //     setState({ ...state, toiletFacilities: toiletLocations });
  //     setState({ ...state, water: true });
  //     setState({ ...state, toilet: true });
  //   }
  // };

  return (
    <Grid container id="container">
      <Grid item xs={12} md={12}>
        <div id="geocoder" className="geocoder"></div>
        {<MapView searchString={searchString} />}
      </Grid>
      {/* <Grid item xs={12} md={12}>
        <SwitchesGroup filterResults={filterResults} />
      </Grid> */}
    </Grid>
  );
}

export default Filter;
