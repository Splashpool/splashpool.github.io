import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import LocationListing from './components/LocationListing';
import "fontsource-montserrat";


function App() {

  const [locations,setlocation]=useState([
    {name:"london",longitude:"51.5074",latitude:" 0.1278",status:"Drinkable"},
    {name:"Santiago",longitude:"54.5074",latitude:" 7.1278",status:"Need traitment"},
    {name:"Santiago",longitude:"94.5074",latitude:" 7.1278",status:"Drinkable"},
    {name:"Santiago",longitude:"04.5074",latitude:" 7.1278",status:"Uknown"}

  ]);

  return (
    <div className="App">
      <Header />
      <LocationListing locationData={locations} />
    </div>
  );
}

export default App;
