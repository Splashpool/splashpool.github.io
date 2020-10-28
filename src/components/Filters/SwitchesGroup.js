import React from "react";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import "../../App.css";
import { useState } from "react";

export default function SwitchesGroup(props) {
  const [state, setState] = useState({ water: true, toilet: true });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.checked });
    props.filterResults();
  };

  return (
    <FormControl component="fieldset">
      <FormLabel className="spl-filterTitle">Filter Results</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={state.water}
              color="primary"
              onChange={handleChange}
              name="water"
            />
          }
          label="Water"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.toilet}
              color="primary"
              onChange={handleChange}
              name="toilet"
            />
          }
          label="Toilets"
        />
      </FormGroup>
    </FormControl>
  );
}
