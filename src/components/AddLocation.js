import React, { useState } from 'react';
import countryList from 'react-select-country-list';

import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';

import { addLocation } from '../store/location/locationAction';
import { addLocationLoading } from '../store/location/locationSelector';

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 300,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function AddLocation() {
    const classes = useStyles();
    const options = countryList().getData();

    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [locationName, setLocationName] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [postCode, setPostCode] = useState('');
    const [country, setCountry] = useState('');
    const addLocationLoadingSelector = useSelector(addLocationLoading);

    const clearState = () => {
        setLocationName('');
        setAddress1('');
        setAddress2('');
        setCity('');
        setPostCode('');
        setCountry('');
    }

    const handleLocationNameChange = (e) => {
        setLocationName(e.target.value);
    }
    const handleAdress1Change = (e) => {
        setAddress1(e.target.value);
    }
    const handleAdress2Change = (e) => {
        setAddress2(e.target.value);
    }
    const handleCityChange = (e) => {
        setCity(e.target.value);
    }
    const handleCountryChange = (e) => {
        setCountry(e.target.value);
    };

    const handlePostCodeChange = (e) => {
        setPostCode(e.target.value);
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        clearState();
        setOpen(false);
    };

    const handleSubmit = async () => {
        console.log(locationName, address1, address2, city, postCode, country);
        try {
            await dispatch(addLocation({
                locationName: locationName,
                address1: address1,
                address2: address2,
                city: city,
                postCode: postCode,
                country: country,
                longitude: 21.455,
                latitude: 100.9876,
                adminOrg: "",
                water: false,
                drinkable: false,
                treatment: false,
                unknown: false,
                largeWaterFacility: false,
                maleToilets: false,
                femaleToilets: false,
                largeToiletFacility: false,
                disabledAccess: false,
                chargeForUse: false,
                openingHours: "",
                hasIssue: false
            }));
            setOpen(false);
            clearState();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <Grid container justify="flex-end" className="spl--pb">
                <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                    <AddIcon /> Add Location
                </Button>
            </Grid>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Location</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please enter your location details here.
                    </DialogContentText>
                    <form noValidate autoComplete="off">
                        <TextField
                            margin="dense"
                            id="locationName"
                            label="Location Name"
                            placeholder="Enter location name"
                            type="text"
                            fullWidth
                            required
                            value={locationName}
                            onChange={handleLocationNameChange}
                        />
                        <TextField
                            margin="dense"
                            id="address1"
                            label="Address Line 1"
                            type="text"
                            fullWidth
                            value={address1}
                            onChange={handleAdress1Change}
                        />
                        <TextField
                            margin="dense"
                            id="address2"
                            label="Address Line 2"
                            type="text"
                            fullWidth
                            value={address2}
                            onChange={handleAdress2Change}
                        />
                        <TextField
                            margin="dense"
                            id="city"
                            label="City"
                            type="text"
                            fullWidth
                            required
                            value={city}
                            onChange={handleCityChange}
                        />
                        <TextField
                            margin="dense"
                            id="postcode"
                            label="Postcode"
                            type="text"
                            fullWidth
                            value={postCode}
                            onChange={handlePostCodeChange}
                        />
                        <FormControl className={classes.formControl}>
                            <InputLabel id="country">Country</InputLabel>
                            <Select
                                labelId="country"
                                id="country"
                                required
                                value={country}
                                onChange={handleCountryChange}
                            >
                                {options.map((item) => {
                                    return (<MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>);
                                })}
                            </Select>
                        </FormControl>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => handleSubmit()} color="primary">
                        Add Location
                        {addLocationLoadingSelector && <CircularProgress />}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
