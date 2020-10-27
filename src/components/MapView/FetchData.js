import {useEffect, useState} from 'react';
import axios from "axios";


async function  FetchData ({ longitude: centerLon, latitude: centerLat }) {
    var self = this;
    const newFeaturesList = [];
    
     // Simple GET request using fetch
    var data= await fetch(`https://j33niy2o35.execute-api.eu-west-2.amazonaws.com/dev/locations?longitude=${centerLon}&latitude=${centerLat}`)
     .then(response => response.json())
     .then(data =>  data.forEach(element => {
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



export default FetchData;