import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import LocationListing from "./components/LocationListing";
import "fontsource-montserrat";
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
    <Router>
      <div className="App">
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
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Header />
        <LocationListing locationData={locations} />
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
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
