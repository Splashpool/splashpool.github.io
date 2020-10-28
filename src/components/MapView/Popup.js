import React from 'react';
import Grid from '@material-ui/core/Grid';
import Rating from 'material-ui-rating';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Popup = ({ feature }) => {
    //onst { id, name, description, status, stars } = feature.properties;
    const { id, name, stars } = feature.properties;
    function Detailpage() {

        window.location.href = `/location-details/${id}`;

    }
    return (
        <Grid container spacing={0} className="popupdiv">
            <Grid item xs={12}>
                <Typography>{name}</Typography>
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
                <Button color="primary" onClick={Detailpage}>
                    Details
            </Button>
            </Grid>
        </Grid>
    );
};

export default Popup;