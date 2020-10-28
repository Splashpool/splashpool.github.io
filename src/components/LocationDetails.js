//import React, { Component } from 'react';
import React, {  useEffect, useState, useCallback  } from 'react';
import Grid from '@material-ui/core/Grid';
import Rating from 'material-ui-rating';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import FetchLocation from './FetchLocation';
import { useDispatch, useSelector } from 'react-redux';
import { getLocation } from '../store/location/locationAction';
import { locationList, getLocationLoading} from '../store/location/locationSelector';



// ES5





const LocationDetails = (features) => {
//     let d=  useEffect(() => {

//         return ( FetchLocation({ LocationId: parseInt(features.match.params.number) }));

//     }, [features.match.params.number]);
//  console.log(d);
const dispatch = useDispatch();
const locationListSelector = useSelector(locationList);
const getLocationList = useCallback( () => {
     dispatch(getLocation());
}, [dispatch]);
useEffect( () => {
     getLocationList();
}, [getLocationList]);

const result = locationListSelector.filter(loc=>( loc.locationId== parseInt(features.match.params.number))
   )
console.log('result  :',result.locationId);
    var data = { id: 1, name: 'name', description: 'descriptionn', status: 'unkown', stars: 2 };
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

    return (

        <Grid container spacing={0}>
            <Grid item xs={12} sm={6}>
            {/* {locationListSelector.map(location => (
   
   <li key={location.locationId}>{location.locationName}</li>

   ))} */}
                {/* to get this line working you need to install -> npm install material-ui-rating
                 and  npm install @material-ui/icons */}


                {/* <Card className="spl-root">
                    <CardActionArea> */}

                <img
                    className="spl-media"
                    src="https://images.freeimages.com/images/large-previews/113/water-from-spring-1426253.jpg"
                    alt="Contemplative Reptile"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                {/* <CardContent> */}
                <Typography variant="h5">Rating {result.locationId}</Typography>

                <Rating
                    value={data.stars}
                    max={5}
                    onChange={(value) => console.log(`Rated with value ${value}`)}
                />
                <FormControl component="fieldset">

                    <RadioGroup aria-label="gender" name="water" value={data.status} onChange={handleChange} className="spl-radio">

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

    );
}

export default LocationDetails;