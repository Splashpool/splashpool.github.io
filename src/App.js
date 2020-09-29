import React, { useState } from "react";
import { StylesProvider } from "@material-ui/core/styles";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Nav from "./components/Nav";
import LocationListing from "./components/LocationListing";
import LocationDetails from "./components/LocationDetails";
import "fontsource-montserrat";
import Search from "./components/Search";
import Filter from "./components/Filter";
import Map from "./components/Map";

function App() {
  const [locations, setlocation] = useState([
    {
      name: "london",
      longitude: "51.5074",
      latitude: " 0.1278",
      status: "Drinkable",
    },
    {
      name: "Santiago",
      longitude: "54.5074",
      latitude: " 7.1278",
      status: "Need traitment",
    },
    {
      name: "Santiago",
      longitude: "94.5074",
      latitude: " 7.1278",
      status: "Drinkable",
    },
    {
      name: "Santiago",
      longitude: "04.5074",
      latitude: " 7.1278",
      status: "Uknown",
    },
  ]);
  

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
                  <Link to="/locations">Locations</Link>
                </li>
                <li>
                  <Link to="/search">Search Locations</Link>
                </li>
                <li>
                  <Link to="/location-listing">Location</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/locations">
                <LocationListing locationData={locations} />
              </Route>
              <Route exact={true} path="/">
                <Header />
              </Route>
              <Route path="/search">
                <Search />
              </Route>
              <Route path="/location-listing">
                <LocationListing locationData={locations} />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
            </Switch>
          </div>

          {/* <LocationListing locationData={locations} /> */}
          <LocationDetails />
          <Map />
          <Filter />
        </div>
      </Router>
    </StylesProvider>
  );
}

export default App;