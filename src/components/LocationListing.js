import React from 'react';
import Location from "./Location";


function LocationListing({
    locationData
}) {
    return (

        locationData.map((location ,index) =>
            < Location  key={index} locations = { location } />
        )


    );
}

export default LocationListing;