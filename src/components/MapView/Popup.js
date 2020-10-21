import React, { Component } from 'react';
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
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Redirect, Link,BrowserRouter } from 'react-router-dom';
import ReactDOM from "react-dom"
import { render } from '@testing-library/react';
import LocationDetails from './../LocationDetails'
const Popup = ({ feature }) => {
    const { id, name, description, status, stars } = feature.properties;

    const [value, setValue] = React.useState(status);

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    function Detailpage() {
        
        ReactDOM.render(
           
            <LocationDetails />, document.querySelector("#container")



        );
        // //console.log(feature.properties);

        //return <Redirect to='/location-details/1' />

    }
    return (
        // <div id={`popup-${id}`} className="popupdiv">
        //     <h3>{name}</h3>
        //     {description}
        // </div>

        <Grid container spacing={0} className="popupdiv">
            <Grid item xs={12}>
                <Typography>{status}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Rating
                    value={stars}
                    max={5}
                    onChange={(value) => console.log(`Rated with value ${value}`)}
                    className="spl-star"
                />
            </Grid>
            <Grid item xs={12}>
                {/* <Button color="primary" onClick={Detailpage}>
                    Details
            </Button> */}
             <BrowserRouter>
                <ul>
                    <li key={id}>
                        <Link to={`/location-details/${id}`} onClick={Detailpage}>Details</Link>
                    </li>
                </ul>
                </BrowserRouter>
            </Grid>
        </Grid>
    );
};

export default Popup;