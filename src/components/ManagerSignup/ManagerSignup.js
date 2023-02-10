import React, { useState } from "react";
import {
  TextField,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

import "./style.css";
import { Link } from "react-router-dom";

function ManagerSignup() {
  const [user, setUser] = useState({ Name: "", Email: "", Password: "" });

  function handleClick(event) {
    console.log(user);
  }

  function handleNameChange(event) {
    const { value } = event.target;

    setUser((prevUser) => {
      return {
        ...prevUser,
        Name: value,
      };
    });
  }

  function handleEmailChange(event) {
    const { value } = event.target;

    setUser((prevUser) => {
      return {
        ...prevUser,
        Email: value,
      };
    });
  }

  function handlePasswordChange(event) {
    const { value } = event.target;

    setUser((prevUser) => {
      return {
        ...prevUser,
        Password: value,
      };
    });
  }
  return (
    <div className="ManagerLogin">
      <Card className="card">
        <CardContent>
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            value={user.Name}
            onChange={handleNameChange}
          />
          <br />
          <br />
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            value={user.email}
            onChange={handleEmailChange}
          />
          <br />
          <br />
          <TextField
            id="outlined-password-input"
            value={user.password}
            label="Password"
            variant="standard"
            type="password"
            onChange={handlePasswordChange}
          />
        </CardContent>
        <CardActions>
          <Button variant="contained" onClick={handleClick}>
            SignUp
          </Button>
          <br />
          <h3> Have an account?</h3>
          <Link to={`/ManagerLogin`}>Login</Link>
        </CardActions>
      </Card>
    </div>
  );
}

export default ManagerSignup;
