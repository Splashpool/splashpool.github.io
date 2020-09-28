import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import LocationListing from './components/LocationListing';
import "fontsource-montserrat";
import Search from './components/Search'

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


export default function App() {

    const [locations, setlocation] = useState([
        { name: "london", longitude: "51.5074", latitude: " 0.1278", status: "Drinkable" },
        { name: "Santiago", longitude: "54.5074", latitude: " 7.1278", status: "Need traitment" },
        { name: "Santiago", longitude: "94.5074", latitude: " 7.1278", status: "Drinkable" },
        { name: "Santiago", longitude: "04.5074", latitude: " 7.1278", status: "Uknown" }

    ]);

    return (

        <Router>
            <div className="App">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/search">Search</Link>
                        </li>
                        <li>
                            <Link to="/locationListing">LocationListing</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/search">
                        <Search />
                    </Route>
                    <Route path="/locationlisting">
                        <LocationListing />
                    </Route>
                    <Route path="/">
                        <Header />
                    </Route>
                </Switch>
                {/* <Header /> */}
            </div>      
        </Router>

        // <div className="App">
        //     <Header />
        //     <LocationListing locationData={locations} />
            
        //     {/* so depends on where we call "Search locations" from - we might not 
        //         need Search from the app main screen.
        //     */}
        //     <Search />
        // </div>
    );
}

//export default App;

// function Home() {
//     return <h2>Home</h2>;
// }
// function About() {
//     return <h2>About</h2>;
// }
// function Users() {
//     return <h2>Users</h2>;
// }