import React, { useState } from "react";
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import './Login.css';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Login() {

  const classes = useStyles();
  const addEmail = (email) => {
    console.log(email);
  }

  // const EmailInput = () => {
  //     const [email] = useState("");
  //     console.log("Email changed");
  // } 

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    console.log("Set email");
  }

  const setEmail = (email) => {
    console.log(email);
  }

  // const handleAddClick = () => {
  //         addEmail(email);
  //         console.log(email);
  // }

  return (
    <div className="Login">
      <Grid container spacing={0}>
      <Grid item md></Grid>
        <Grid item xs={12} md={6}>
        <Avatar className={classes.avatar}>
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
          <form className={classes.form} noValidate>
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
            addEmailFunction={addEmail}
            // value={ email } 
            onChange={handleEmailChange}
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
            className={classes.submit}
            /*onClick={ handleAddClick }*/
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

export default Login;
