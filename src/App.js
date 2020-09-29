import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link ,useRouteMatch,
  useParams} from "react-router-dom";
import Header from './components/Header';
import LocationListing from './components/LocationListing';
import LocationDetails from './components/LocationDetails';
import "fontsource-montserrat";


function App() {
  const [locations, setlocation] = useState([
    { name: "london", longitude: "51.5074", latitude: " 0.1278", status: "Drinkable" },
    { name: "Santiago", longitude: "54.5074", latitude: " 7.1278", status: "Need traitment" },
    { name: "Santiago", longitude: "94.5074", latitude: " 7.1278", status: "Drinkable" },
    { name: "Santiago", longitude: "04.5074", latitude: " 7.1278", status: "Uknown" }

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
              <li>
                <Link to="/LocationListing ">Location</Link>
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
          <Route path="/LocationListing">
          <LocationListing locationData={locations} />
          </Route>
        </Switch>
        </div>
        <Header />
        {/* <LocationListing locationData={locations} /> */}
        <LocationDetails/>
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
