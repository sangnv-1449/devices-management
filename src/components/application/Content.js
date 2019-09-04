import React from "react";
import { Route, Link } from "react-router-dom";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

import Users from "./Users/Users";

const Content = () => {
  return (
    <div className="center">
      <Container>
        <Row>
          <Col md={3} lg={3} className="menu-list">
            <ListGroup variant="flush">
              <Link to="/users">
                <ListGroup.Item action className="menu-item">
                  Users
                </ListGroup.Item>
              </Link>
              <Link to="/devices">
                <ListGroup.Item action className="menu-item">
                  Devices
                </ListGroup.Item>
              </Link>
              <Link to="/requests">
                <ListGroup.Item action className="menu-item">
                  Requests
                </ListGroup.Item>
              </Link>
            </ListGroup>
          </Col>
          <Col md={9} lg={9}>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={Users} />
            <Route path="/devices" component={Devices} />
            <Route path="/requests" component={Requests} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const Home = () => <h1>Home</h1>;
const Devices = () => "Devices";
const Requests = () => "Requests";

export default Content;
