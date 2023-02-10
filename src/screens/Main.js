import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row, Container } from "react-bootstrap";

function Main() {
  return (
    <Container>
      <Row>
        <Col>
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            class="img-fluid"
            alt="Phone image"
          />
        </Col>

        <Col>
          <Card>
            <Link to={`/ManagerLogin`} className="btn btn-dark my-3">
              Manager Login
            </Link>
            <Link to={`/UserLogin`} className="btn btn-dark my-3">
              User Login
            </Link>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
