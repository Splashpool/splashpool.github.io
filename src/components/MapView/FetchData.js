import {useEffect, useState} from 'react';
import axios from "axios";


const  FetchData =({long,lat}) => {
   
    const newFeaturesList = [];
     // Simple GET request using fetch
     fetch(`https://j33niy2o35.execute-api.eu-west-2.amazonaws.com/dev/locations?longitude=${long}&latitude=${lat}`)
     .then(response => response.json())
     .then(data => data.forEach(element => {
         let id =element.locationId;
         newFeaturesList.push({
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [element.longitude, element.latitude],
                },
                properties: {
                    id,
                    name: `Random Point #${id}`,
                    description: `description for Random Point #${id}`,
                    WC: true,
                    Water: true,
                    stars: 4,
                    status: 'drinkable'
                },
            })
         
     }) 
     
     
     );

    //   let id =6565465;
    //  newFeaturesList.push({
    //     type: 'Feature',
    //     geometry: {
    //         type: 'Point',
    //         coordinates: [114.18091572323176, 22.306262001098956],
    //     },
    //     properties: {
    //         id,
    //         name: `Random Point #${id}`,
    //         description: `description for Random Point #${id}`,
    //         WC: true,
    //         Water: true,
    //         stars: 4,
    //         status: 'drinkable'
    //     },
    // })
    
    
    // const [list, setlist] = useState('');
     
    // useEffect (() => { axios.get('https://j33niy2o35.execute-api.eu-west-2.amazonaws.com/dev/locations?longitude=111.0&latitude=21.0', { crossdomain: true }
    // )
    // .then((response) => {
    //   console.log(response);
    // }, (error) => {
    //   console.log(error);
    // },[list]
    // )});
   
    // return Promise.resolve({
    //     type: 'FeatureCollection',
    //     features: newFeaturesList,
    // });
    return Promise.resolve({
        type: 'FeatureCollection',
        features: newFeaturesList,
    });
};

/**
 * Generates a random point within 0.025 radius of map center coordinates.
 * @param {CoordinatePair} centerCoordinates - the {@link CoordinatePair} for the map center
 * @return {CoordinatePair} randomly generated coordinate pair
 */



export default FetchData;