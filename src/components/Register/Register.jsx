import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from "@material-ui/core/TextField";

import { withFirebase } from '../Firebase';
import * as ROUTES from "../../constants/routes";

const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null,
};

const ERROR_CODE_ACCOUNT_EXISTS = "auth/email-already-in-use";

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with this E-Mail address already exists.
  Try to login with this account instead. If you think the
  account is already used from one of the social logins, try
  to sign in with one of them.
`;

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { firstName, lastName, email, passwordOne, isAdmin } = this.state;
    const roles = {};

    /*    if (isAdmin) {
      roles[ROLES.ADMIN] = ROLES.ADMIN;
    }
*/
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      /*   .then((authUser) => {
        // Create a user in your Firebase realtime database
        return this.props.firebase.user(authUser.user.uid).set({
          username,
          email,
          roles,
        });
      })    */
      .then(() => {
        return this.props.firebase.doSendEmailVerification();
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }

        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onChangeCheckbox = (event) => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  registerUser = () => {
    console.log(this.email, this.password);
    /*  auth
      .createUserWithEmailAndPassword(this.email, this.password)
      .then((userObj) => console.log(this.email, this.password, userObj))
      .catch((error) => console.log("error registering a new user", error)); */
    return null;
  };

  // registerUser();

  state = {};
  render() {
    const {
      firstName,
      lastName,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      firstName === "" ||
      lastName === "";

    return (
      <div className="Register">
        <Grid container spacing={0}>
          <Grid item md></Grid>
          <Grid item xs={12} md={6}>
            <Avatar /*className={classes.avatar}*/>
              <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h3" component="h1" gutterBottom>
              Welcome! Sign up to continue
            </Typography>
            <Typography variant="body1" gutterBottom>
              Enter an email address and password
            </Typography>
            <form
              /*className={classes.form}*/ noValidate
              onSubmit={this.onSubmit}
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                value={firstName}
                autoFocus
                onChange={this.onChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoFocus
                value={lastName}
                onChange={this.onChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={this.onChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="passwordOne"
                onChange={this.onChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Confirm password"
                type="password"
                id="passwordTwo"
                onChange={this.onChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="organisation"
                label="Organisation"
                type="organisation"
                id="organisation"
                onChange={this.onChange}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                disabled={!isInvalid}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Continue
              </Button>
              {console.log("Is Invalid value: ", isInvalid)}
              {error && <p>{error.message}</p>}
            </form>
          </Grid>
          <Grid item md></Grid>
        </Grid>
      </div>
    );
  }
}

export default Register;
