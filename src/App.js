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
import Nav from "./components/Nav";
import LocationListing from "./components/LocationListing";
import LocationDetails from "./components/LocationDetails";
import "fontsource-montserrat";
import Search from "./components/Search";
import Filter from "./components/Filter";

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
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/locations">Locations</Link>
                </li>
                <li>
                  <Link to="/search">Search Locations</Link>
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
              <Route path="/search">
                <Search />
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
          <LocationDetails />

          <div class="mui-row">
            <div class="mui-col-md-8 mui-col-md-offset-2">
              <img src="../public/placeholder.png" class="image" />
            </div>
          </div>
          <div class="mui-row">
            <div class="mui-col-md-8 mui-col-md-offset-2">
              <Filter />
            </div>
          </div>
        </div>
      </Router>
    </StylesProvider>
  );
}

function About() {
  return <h2>About</h2>;
}
function Test() {
  return <h2>Test</h2>;
}

export default App;
