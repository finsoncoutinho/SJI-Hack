import React, { useState } from "react";
import {
  TextField,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

import "./style.css";

function UserLogin() {
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
        <CardContent>
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
        </CardContent>
        <CardActions>
          <Button variant="contained" onClick={handleClick}>
            Login
          </Button>

          <br />
        </CardActions>
      </Card>
    </div>
  );
}

export default UserLogin;
