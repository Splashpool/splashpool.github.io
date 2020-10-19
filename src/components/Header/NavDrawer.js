import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import RoomIcon from '@material-ui/icons/Room';
import SearchIcon from '@material-ui/icons/Search';
import LockIcon from '@material-ui/icons/Lock';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const styles = theme => ({
    drawerPaper: { width: 'inherit',
    marginTop: 64,
    [theme.breakpoints.down('sm')]: {
        marginTop: 56
    }
    },
    link: {
      textDecoration: 'none',
      color: theme.palette.text.primary
    },
    gutterBottom: {
      marginBottom: '1.5rem'
    }
  });

class NavDrawer extends Component {
    state = {  }
    render() {
        const { classes } = this.props;
        return (
            <div style={{ display: 'flex' }}>
          <Drawer
            style={{ width: '240px' }}
            varian="persistent"
            anchor="left"
            open={this.props.drawerOpened}
            onClose={this.props.toggleDrawer(false)}
            classes={{ paper: classes.drawerPaper }}
          >
            <List
                      onClick={this.props.toggleDrawer(false)}
                      onKeyDown={this.props.toggleDrawer(false)}
            >
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
        );
    }
}

export default withStyles(styles) (NavDrawer);