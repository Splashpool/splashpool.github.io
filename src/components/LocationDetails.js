//import React, { Component } from 'react';
import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Rating from 'material-ui-rating';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

//import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { getLocation } from '../store/location/locationAction';
import { locationList } from '../store/location/locationSelector';





// ES5





const LocationDetails = (features) => {

    //     let d=  useEffect(() => {

    //    
    let locationId = features.match.params.number;
    console.log('idddd', locationId);
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
        locationData = locationListSelector.filter((location) => location.locationId === parseInt(locationId))[0];
    }
    console.log('datttta', locationData);

    // let result=FetchLocation({ LocationId: parseInt(features.match.params.number)});
    // var data = { id: 1, name: 'name', description: 'descriptionn', status: 'drinkable', stars: 4 };

    // console.log(result);
    // const result = locationListSelector.filter( loc=>( loc.locationId== parseInt(features.match.params.number))
    //    )



    // }
    // const [value, setValue] = React.useState('drinkable');
    //   console.log('features kkkkkkk',features.features.properties); 
    const handleChange = (event) => {
        // setValue(event.target.value);
    };




    var search = document.getElementById("geocoder");
    // remove search from nav  bar
    if (search != null && search.childNodes[0]) {

        search.removeChild(search.childNodes[0]);
    }
    if (locationData) {
        console.log('data  ', locationData);
        let drinkable = '';
        if (locationData.drinkable === true) {
            drinkable = 'drinkable';
        } else {
            drinkable = 'treatment';
        }
        return (

            <Grid container spacing={0}>
                <Grid item xs={12} sm={6}>


                    <img
                        className="spl-media"
                        src="https://images.freeimages.com/images/large-previews/113/water-from-spring-1426253.jpg"
                        alt="Contemplative Reptile"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    {/* <CardContent> */}
                    <Typography variant="h5">{locationData.locationName}</Typography>

                    <Rating
                        value={4}
                        max={5}
                        onChange={(value) => console.log(`Rated with value ${value}`)}
                    />
                    <FormControl component="fieldset">

                        <RadioGroup aria-label="gender" name="water" value={drinkable} onChange={handleChange} className="spl-radio">

                            <FormControlLabel value="drinkable" control={<Radio color="primary" />} label="Drinkable" />
                            <Divider />
                            <FormControlLabel value="treatment" control={<Radio color="primary" />} label="Need treatment" />
                            <Divider />
                            <FormControlLabel value="undrinkable" control={<Radio color="primary" />} label="Undrinkable" />
                            <Divider />
                            <FormControlLabel value="unkown" control={<Radio color="primary" />} label="Unkown" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                {/* </CardContent> */}
                {/* </CardActionArea> */}
                {/* <CardActions> */}
                <Grid item xs={12}>
                    <Button size="small" color="primary">
                        Report a problem
                        </Button>
                    <Button size="small" variant="contained" color="primary" disableElevation>
                        Notify me
                        </Button>
                </Grid>
                {/* </CardActions>
                </Card>
 */}





            </Grid>

        )
    } else {
        return (

            <Grid container spacing={0}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h5">loading .....</Typography>

                </Grid>
            </Grid>
        );
    }

}

export default LocationDetails;