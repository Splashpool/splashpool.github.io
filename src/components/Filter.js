import React from "react";
import Grid from "@material-ui/core/Grid";
//import Button from "@material-ui/core/Button";
import SwitchesGroup from "./SwitchesGroup";

function Filter() {
  return (
    <Grid container>
      <Grid item xs={12} md={8}>
        <SwitchesGroup> </SwitchesGroup>
      </Grid>
    </Grid>
  );
}

export default Filter;
