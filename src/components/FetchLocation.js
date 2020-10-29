

async function FetchLocation({ LocationId }) {
    
    const newFeaturesList = [];
    console.log(LocationId);
    // Simple GET request using fetch
    await fetch(`https://j33niy2o35.execute-api.eu-west-2.amazonaws.com/dev/locations?locationId=${LocationId}`)
        .then(response => response.json())
        .then(data => data.map(element => {
        return    newFeaturesList.push(element)

        })

        );
    
    return Promise.resolve(
     newFeaturesList

    );
};



export default FetchLocation;