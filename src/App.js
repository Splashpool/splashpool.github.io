import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles, StylesProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import LocationDetails from "./components/LocationDetails";
import "fontsource-montserrat";
import Search from "./components/Search/Search.jsx";
import Filter from "./components/Filter";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faHandHoldingWater } from "@fortawesome/free-solid-svg-icons";
import Copyright from "./components/Copyright/Copyright";
import HomeIcon from '@material-ui/icons/Home';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import RoomIcon from '@material-ui/icons/Room';
import SearchIcon from '@material-ui/icons/Search';
import LockIcon from '@material-ui/icons/Lock';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Header from './components/Header/Header';


library.add(fab, faHandHoldingWater);

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: 'inherit' },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary
  },
  gutterBottom: {
    marginBottom: '1.5rem'
  }
}))

function App() {

  const classes = useStyles();

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
        <div style={{ display: 'flex' }}>
          <Drawer
            style={{ width: '240px' }}
            varian="persistent"
            anchor="left"
            open={true}
            classes={{ paper: classes.drawerPaper }}
          >
            <List>
              <Link to="/" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Home"} />
                </ListItem>
              </Link>
              <Link to="/locations" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <MyLocationIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Locations"} />
                </ListItem>
              </Link>
              <Link to="/location-details/:number" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <RoomIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Locations Details"} />
                </ListItem>
              </Link>
              <Link to="/search" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <SearchIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Search"} />
                </ListItem>
              </Link>
              <Link to="/login" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <LockIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Login"} />
                </ListItem>
              </Link>
              <Link to="/register" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <ExitToAppIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Register"} />
                </ListItem>
              </Link>
            </List>
          </Drawer>
        </div>
        <Header />
        <Container maxWidth="md">
          <Switch>
            <Route path="/locations">
              <Filter />
            </Route>
            <Route path="/search" component={Search} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
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