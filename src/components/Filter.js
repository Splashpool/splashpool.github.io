import React from "react";
import Grid from "@material-ui/core/Grid";
//import Button from "@material-ui/core/Button";
import SwitchesGroup from "./SwitchesGroup";

function Filter() {
  return (
    <Grid container className="custom-font">
      <Grid item xs={12} md={8}>
        <SwitchesGroup className="custom-font"> </SwitchesGroup>
      </Grid>
    </Grid>
  );
}

export default Filter;
