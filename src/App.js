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
      id: 1,
      name: "london",
      longitude: "51.5074",
      latitude: " 0.1278",
      status: "Drinkable",
    },
    {
      id: 2,
      name: "Santiago",
      longitude: "54.5074",
      latitude: " 7.1278",
      status: "Need traitment",
    },
    {
      id: 3,
      name: "Santiago",
      longitude: "94.5074",
      latitude: " 7.1278",
      status: "Drinkable",
    },
    {
      id: 4,
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
                  <Link to="/search">Search</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/locations">
                <Map />
                <LocationListing locationData={locations} />
                <Filter />
              </Route>
              <Route exact={true} path="/">
                <Header />
              </Route>
              <Route path="/search">
                <Search />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
            </Switch>
            <Switch>
              <Route path='/location-details/:number' component={LocationDetails} />
            </Switch>
          </div>
        </div>
      </Router>
    </StylesProvider>
  );
}

export default App;