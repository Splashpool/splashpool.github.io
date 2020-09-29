import React, {useState} from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";

function Login() {
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
      <Typography
        variant="h3"
        component="h3"
        gutterBottom
        >
        Login with Email
      </Typography>
      <Typography variant="body1" gutterBottom>
      Enter the email address associated with your account
      </Typography>
      <form noValidate autoComplete="off">
        <TextField 
            id="outlined-basic" 
            type="email" 
            label="Outlined" 
            variant="outlined" 
            addEmailFunction={ addEmail } 
            // value={ email } 
            onChange={ handleEmailChange } 
        />
      </form>
      <Button variant="contained" color="primary" /*onClick={ handleAddClick }*/>
        Continue
      </Button>
      <Typography variant="body1" gutterBottom>
      No account. 
      <Link href="#" /*onClick={preventDefault}*/ >
        Create one
      </Link>
      </Typography>
    </div>
  );
}

export default Login;
