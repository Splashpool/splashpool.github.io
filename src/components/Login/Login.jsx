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
//import { makeStyles } from '@material-ui/core/styles';
import './Login.css';

class Login extends Component {


  // const useStyles = makeStyles((theme) => ({
  //   paper: {
  //     marginTop: theme.spacing(8),
  //     display: 'flex',
  //     flexDirection: 'column',
  //     alignItems: 'center',
  //   },
  //   avatar: {
  //     margin: theme.spacing(1),
  //     backgroundColor: theme.palette.secondary.main,
  //   },
  //   form: {
  //     width: '100%', // Fix IE 11 issue.
  //     marginTop: theme.spacing(1),
  //   },
  //   submit: {
  //     margin: theme.spacing(3, 0, 2),
  //   },
  // }));

  // const classes = useStyles();

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }
  
  login() {
    console.log('this.state', this.state);
  }

  state = {}
  render() {
    return (
      <div className="Login">
        <Grid container spacing={0}>
          <Grid item md></Grid>
          <Grid item xs={12} md={6}>
            <Avatar /*className={classes.avatar}*/>
              <LockOutlinedIcon />
            </Avatar>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
            >
              Login with Email
      </Typography>
            <Typography variant="body1" gutterBottom>
              Enter the email address associated with your account
      </Typography>
            <form /*className={classes.form}*/ noValidate>
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
                onChange={event => this.setState({ email: event.target.value })}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={event => this.setState({ password: event.target.value })}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                /*className={classes.submit}*/
                onClick={() => this.login()}
              >
                Continue
          </Button>
            </form>


            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body1">
                  Forgot password?
              </Link>
              </Grid>
              <Grid item>No account.
              <Link href="#" variant="body1" gutterBottom>
                  {" Create one"}
                </Link>
              </Grid>
            </Grid>

          </Grid>
          <Grid item md></Grid>
        </Grid>
      </div>

    );
  }
}
export default Login;