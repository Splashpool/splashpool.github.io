import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AuthNav from "../AuthNav";
import NavDrawer from './NavDrawer'
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
});

// const [auth, setAuth] = React.useState(true);
// const [anchorEl, setAnchorEl] = React.useState(null);
// const open = Boolean(anchorEl);

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      drawerOpened: false
    };
  }
  toggleDrawer = booleanValue => () => {
    this.setState({
      drawerOpened: booleanValue
    });
  };

  // handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  // handleMenu = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // handleClose = () => {
  //   setAnchorEl(null);
  // };



  render() {
    const { classes } = this.props;
    return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
          onClick={this.toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          
          <div id="geocoder" class="geocoder"></div>
          <Typography variant="h6" className={classes.title}>
            Photos
          </Typography>
            <div>
            <AuthNav />
            {/* <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleClose}>My account</MenuItem>
              </Menu> */}
            </div>
        </Toolbar>
      </AppBar>

      <NavDrawer
          drawerOpened={this.state.drawerOpened}
          toggleDrawer={this.toggleDrawer}
        />
      </div>
  );
 }
}
export default withStyles(styles) (Header);