import React, { useState } from 'react';
import { StylesProvider } from "@material-ui/core/styles";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link ,useRouteMatch,
  useParams} from "react-router-dom";
import Header from './components/Header';
import Nav from './components/Nav';
import LocationListing from './components/LocationListing';
import LocationDetails from './components/LocationDetails';
import "fontsource-montserrat";
import Search from './components/Search'



<<<<<<< HEAD
function App() {
  const [locations, setlocation] = useState([
    { name: "london", longitude: "51.5074", latitude: " 0.1278", status: "Drinkable" },
    { name: "Santiago", longitude: "54.5074", latitude: " 7.1278", status: "Need traitment" },
    { name: "Santiago", longitude: "94.5074", latitude: " 7.1278", status: "Drinkable" },
    { name: "Santiago", longitude: "04.5074", latitude: " 7.1278", status: "Uknown" }
=======
    const [locations, setlocation] = useState([
        { name: "london", longitude: "51.5074", latitude: " 0.1278", status: "Drinkable" },
        { name: "Santiago", longitude: "54.5074", latitude: " 7.1278", status: "Need traitment" },
        { name: "Santiago", longitude: "94.5074", latitude: " 7.1278", status: "Drinkable" },
        { name: "Santiago", longitude: "04.5074", latitude: " 7.1278", status: "Uknown" }
>>>>>>> origin/chi-branch

    ]);

<<<<<<< HEAD
  return (
    <StylesProvider injectFirst>
    <Router>
      <div className="App">
        <Nav />
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/locations">Locations</Link>
              </li>
              <li>
                <Link to="/test">test</Link>
              </li>
              <li>
                <Link to="/LocationListing ">Location</Link>
              </li>
            </ul>
          </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/locations">
            <LocationListing locationData={locations} />
          </Route>
          <Route exact={true} path="/">
            <Header />
          </Route>
          <Route path="/test">
            <Test />
          </Route>
          <Route path="/LocationListing">
          <LocationListing locationData={locations} />
          </Route>
        </Switch>
        </div>

      
        {/* <LocationListing locationData={locations} /> */}
        <LocationDetails/>

      </div>
    </Router>
    </StylesProvider>
  );
=======
    return (
        <div className="App">
            <Header />
            <LocationListing locationData={locations} />
            
            {/* so depends on where we call "Search locations" from - we might not 
                need Search from the app main screen.
            */}
            <Search />
        </div>
    );
>>>>>>> origin/chi-branch
}


function About() {
  return <h2>About</h2>;
}
function Test() {
  return <h2>Test</h2>;
}


export default App;
