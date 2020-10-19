import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { TextField, Button, Switch, FormGroup, FormControlLabel} from '@material-ui/core/';


const AddLocation = () => {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
      });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    
        return (
            <Grid container spacing={0}>
                <Grid item md></Grid>
                <Grid item xs={12} md={6}>

                    <form /*className={classes.form}*/ noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="text"
                            label="Location Name"
                            name="locationName"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="text"
                            label="Address Line 1"
                            name="addressLine1"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="text"
                            label="Address Line 2"
                            name="addressLine2"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="text"
                            label="City"
                            name="city"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="text"
                            label="Postcode"
                            name="postcode"
                            autoFocus
                        />
                                               <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="text"
                            label="Country"
                            name="country"
                            autoFocus
                        />
                        <FormGroup>
  <FormControlLabel
    control={<Switch size="small" /*checked={checked} onChange={toggleChecked}*/ />}
    label="Water"
  />
  <FormControlLabel
    control={<Switch size="small" /*checked={checked} onChange={toggleChecked}*/ />}
    label="Toilet"
  />
</FormGroup>
                    </form>
                </Grid>
                <Grid item md></Grid>
            </Grid>
        );
}

export default AddLocation;