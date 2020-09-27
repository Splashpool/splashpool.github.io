import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SearchIcon from "@material-ui/icons/Search";
import VisibilityIcon from '@material-ui/icons/Visibility';

function Search() {
    return (
        // if Search isn't part of the Header, then it should call Header to bring into background 
        // <Header />

        // now we show the Search text input
        <div className="Search">
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item >
                    <SearchIcon />
                </Grid>
                <Grid item >
                    <TextField id="input-with-icon-grid filled" label="Search locations" />
                    {/* <TextField id="input-with-icon-grid" label="Search locations" /> */}
                </Grid>
                <Grid item >
                    <VisibilityIcon />
                </Grid>
            </Grid>
    </div>
    );
}

export default Search;