import React from 'react';
import CssBaseLine from '@material-ui/core/CssBaseLine';
import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SearchIcon from "@material-ui/icons/Search";
import GpsFixedTwoToneIcon from '@material-ui/icons/GpsFixedTwoTone';
import SettingsTwoToneIcon from '@material-ui/icons/SettingsTwoTone';
import IconButton from '@material-ui/core/IconButton';
import Header from './Header';
import { Box } from '@material-ui/core';


function Search() {

    return (
        // now we show the Search text input
        <div className="Search">
            <Header />

            {/* <Grid container spacing={1} alignItems="flex-start" >
                <Grid item >
                    <SearchIcon />
                </Grid>
                <Grid item >
                    <TextField className="textBox"
                        variant="filled"
                        id="input-with-icon-grid"
                        label="Search locations"
                        style={{ minWidth: 350, maxWidth: 800 }}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="flex-start">
                <Grid item >
                    <IconButton>
                        <GpsFixedTwoToneIcon />Find Nearest Facility
                    </IconButton>
                </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="flex-start">
                <Grid item >
                    <IconButton>
                        <SettingsTwoToneIcon />Manage Saved Locations
                    </IconButton>
                </Grid>
            </Grid> */}

            <Box pt={6}>
                <React.Fragment>
                    {<CssBaseLine />}
                    <Container maxWidth="sm">
                        <SearchIcon />
                        <TextField className="textBox spl--tb-colors"
                            variant="filled"
                            id="input-with-icon-grid"
                            label="Search locations"
                            style={{ minWidth: 350, maxWidth: 800 }}
                        />
                    </Container>
                </React.Fragment>

                <React.Fragment>
                    {<CssBaseLine />}
                    <Container maxWidth="sm">
                        <IconButton>
                            <GpsFixedTwoToneIcon />Find Nearest Facility
                        </IconButton>
                    </Container>
                </React.Fragment>

                <React.Fragment>
                    {<CssBaseLine />}
                    <Container maxWidth="sm" align-Items="flex-start"  className="spl--settingsIconColor">
                        <IconButton>
                            <SettingsTwoToneIcon />Manage Saved Locations
                        </IconButton>
                    </Container>
                </React.Fragment>
            </Box>

        </div>
    );
}

export default Search;


        // // if Search isn't part of the Header, then it should call Header to bring into background 

        // // now we show the Search text input
        // <div className="Search">
        //     {/* <Header /> */}
        //     <Grid container spacing={1} alignItems="flex-end" >
        //         <Grid item >
        //             <SearchIcon />
        //         </Grid>
        //         <Grid item >
        //             <TextField className="textBox"
        //                 variant="filled"
        //                 id="input-with-icon-grid"
        //                 label="Search locations"
        //                 style={{ minWidth: 350, maxWidth: 800 }}
        //             />
        //         </Grid>
        //     </Grid>
        //     <Grid container spacing={1} alignItems="flex-end">
        //         <Grid item >
        //             <IconButton>
        //                 <GpsFixedTwoToneIcon />Find Nearest Facility
        //             </IconButton>
        //         </Grid>
        //     </Grid>
        //     <Grid container spacing={1} alignItems="flex-end">
        //         <Grid item >
        //             <IconButton>
        //                 <SettingsTwoToneIcon />Manage Saved Locations
        //             </IconButton>
        //         </Grid>
        //     </Grid>

        // </div>
