

async function  FetchData ({ longitude: centerLon, latitude: centerLat }) {
   
    const newFeaturesList = [];
    
     // Simple GET request using fetch
    await fetch(`https://j33niy2o35.execute-api.eu-west-2.amazonaws.com/dev/locations?longitude=${centerLon}&latitude=${centerLat}`)
     .then(response => response.json())
     .then(data =>  data.forEach(element => {
         console.log(element);
         let id =element.locationId;
         newFeaturesList.push({
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [element.longitude, element.latitude],
                },
                properties: {
                    id,
                    name: element.locationName,
                    city: element.city,
                    WC: element.maleToilets,
                    Water:  element.water,
                    stars: 4,
                    status: element.drinkable
                },
            })
         
     }) 
     
     
     );

    return Promise.resolve({
        type: 'FeatureCollection',
        features: newFeaturesList,
    });
};



export default FetchData;