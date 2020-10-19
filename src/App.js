import React, { Component } from 'react';
import { StylesProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Profile from "./components/Profile";
import LocationDetails from "./components/LocationDetails";
import "fontsource-montserrat";
import Search from "./components/Search/Search.jsx";
import Filter from "./components/Filter";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faHandHoldingWater } from "@fortawesome/free-solid-svg-icons";
import Copyright from "./components/Copyright/Copyright";
import Header from './components/Header/Header';
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./components/Loading";
import ProtectedRoute from "./auth/protected-route";


library.add(fab, faHandHoldingWater);

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  // const [locations, setlocation] = useState([
  //   {
  //     id: 1,
  //     name: "london",
  //     longitude: "51.5074",
  //     latitude: " 0.1278",
  //     status: "Drinkable",
  //   },
  //   {
  //     id: 2,
  //     name: "Santiago",
  //     longitude: "54.5074",
  //     latitude: " 7.1278",
  //     status: "Need traitment",
  //   },
  //   {
  //     id: 3,
  //     name: "Santiago",
  //     longitude: "94.5074",
  //     latitude: " 7.1278",
  //     status: "Drinkable",
  //   },
  //   {
  //     id: 4,
  //     name: "Santiago",
  //     longitude: "04.5074",
  //     latitude: " 7.1278",
  //     status: "Uknown",
  //   },
  // ]);

  return (
    <StylesProvider injectFirst>
      <Router>
        <Header />
        <Container maxWidth="md">
          <Switch>
            <Route path="/locations">
              <Filter />
            </Route>
            <Route path="/search" component={Search} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <ProtectedRoute path="/profile" component={Profile} />
            <Route
              path="/location-details/:number"
              component={LocationDetails}
            />
            <Route path="/" exact={true} component={Home} />
          </Switch>
        </Container>
        <Copyright />
      </Router>
    </StylesProvider>
  );
}

export default App;