import React from "react";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
//import FormHelperText from "@material-ui/core/FormHelperText";
import Switch from "@material-ui/core/Switch";

export default function SwitchesGroup() {
  const [state, setState] = React.useState({
    water: true,
    toilet: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="filterTitle">Filter Results</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={state.water}
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
