import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { Card } from "react-bootstrap";

import "./style.css";
import { Link } from "react-router-dom";

function ManagerLogin() {
  const [user, setUser] = useState({ Email: "", Password: "" });

  function handleClick(event) {
    console.log(user);
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
      <Card sx={{ minWidth: 275 }} className="card">
        <Card.Body>
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            value={user.email}
            onChange={handleEmailChange}
          />
          <br></br>
          <TextField
            id="outlined-password-input"
            value={user.password}
            label="Password"
            variant="standard"
            type="password"
            onChange={handlePasswordChange}
          />
          <br />
          <br />
          <Button variant="contained" onClick={handleClick}>
            Login
          </Button>
        </Card.Body>
        <br />
        <h6>Don't have an account?</h6>
        <Link to={`/ManagerSignup`} className="btn btn-primary">
          Signup
        </Link>
      </Card>
    </div>
  );
}

export default ManagerLogin;
