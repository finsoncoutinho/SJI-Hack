import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

function Main() {
  return (
    <Card>
      <Link to={`/ManagerLogin`}>Manager Login</Link>
      <Link to={`/UserLogin`}>User Login</Link>
    </Card>
  );
}

export default Main;
