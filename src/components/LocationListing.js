import React from 'react';
import Location from "./Location";


function LocationListing({
    locationData
}) {
    return (

        locationData.map((location) =>
            <
            Location locations = {
                location
            }
            />
        )


    );
}

export default LocationListing;