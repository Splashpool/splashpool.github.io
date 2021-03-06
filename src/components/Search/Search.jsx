import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import SearchIcon from "@material-ui/icons/Search";
import GpsFixedTwoToneIcon from '@material-ui/icons/GpsFixedTwoTone';
import SettingsTwoToneIcon from '@material-ui/icons/SettingsTwoTone';
// import Login from '../Login/Login.jsx';
// import LocationListing from '../LocationListing.js';

// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link,
//     useRouteMatch,
//     useParams,
//   } from "react-router-dom";

// import { Redirect } from 'react-router';
// import { Home, LocationSearching } from '@material-ui/icons';
//import MapView from '../MapView';
import Filter from '../Filter';

class Search extends Component {
    
    state = { value: '', text:'', geoClicked: false, saveLocsClicked: false, searchEntered: false }

    newSearch = e => {
        this.setState({ value: e.target.value });
    }

    submit = e => {
        console.log(`New Search: ${this.state.value}`);
        e.preventDefault();
    }

    handleClick = (buttonText) => {
        console.log(`${buttonText} Clicked`);
        if (buttonText === 'geolocation') {
            console.log(`${buttonText} Clicked2`);
            // this.setState({ geoClicked: true });
            //this.state.geoClicked = true;
            this.setState({ geoClicked: true });
        }
        else // can only be gelocation or savedLocations button clicked.
        {
            console.log(`${buttonText} Clicked3`);
            //this.state.saveLocsClicked = true;
            this.setState({ saveLocsClicked: true });
        }
        console.log(this.state.geoClicked.toString());
        console.log(this.state.saveLocsClicked.toString());
        console.log(this.state.searchEntered.toString());
        this.setState({ redirect: true });
    }

    handleEnterKeyPress = (event) => {
        if (event.keyCode === 13) {
            let searchStr = event.target.value;
            console.log(`${searchStr}<ENTER>`);
            // console.log(`${event.target.value}<ENTER>`);

            // return (<LocationListing /> )

            this.setState({ searchEntered: true })
            //    this.state.searchEntered = true;

            // console.log(this.state.geoClicked.toString());
            // console.log(this.state.saveLocsClicked.toString());
            // console.log(this.state.searchEntered.toString());
            //            this.setState({redirect: true});

            event.target.value = '';  // potentially have to place this elsewhere
        }
    }

    handleTextChange = (event) => {
        this.setState({ text: event.target.value });
    }

    render() {
        if (this.state.redirect && this.state.geoClicked) {
            // let params = { searchString: '', isGeo: true}
            // let params = { searchString: 'geolocation'}
            let searchString = 'geolocation';
            console.log(`passing to Filter1 - ${searchString}`)
            return <Filter searchString={searchString} />
        }
        else if (this.state.redirect && this.state.saveLocsClicked) {
            console.log('Into Managed Saved Locations');
            // return <ManageSavedLocations />
        }
        //        else if ( this.state.redirect && this.state.searchEntered) {
        else if (this.state.redirect && this.state.searchEntered) {
            // let params = {searchString: this.state.text, isGeo: false };
            let searchString = { searchString: this.state.text };
            console.log(`passing to Filter2 - searchString`); // = ${params.searchString}`);
            return <Filter searchString={searchString} />
        }
        else {
            return (
                <div>
                    <div>
                        <form onSubmit={this.submit} oValidate autoComplete="off">
                            <TextField type="search"
                                placeholder="Search locations"
                                inputProps={{ 'aria-label': 'Search locations' }}
                                onChange={this.newSearch}
                            />
                            <IconButton type="submit" aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </form>
                    </div>
                    <div>
                        <Button color="primary" startIcon={<GpsFixedTwoToneIcon />} onClick={() => this.handleClick('geolocation')}>
                            Find Nearest Facility
                            </Button>
                    </div>
                    <div>
                        <Link to="/manage-locations" style={{ textDecoration: 'none' }}>
                            <Button color="primary" startIcon={<SettingsTwoToneIcon />} onClick={() => this.handleClick('savedLocations')}>
                                Manage Saved Locations
                            </Button>
                        </Link>
                    </div>
                </div>
            )
        }
    }
}
export default Search;