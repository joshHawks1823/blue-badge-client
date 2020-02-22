import React, { useState } from "react";
import {
  Form,
  Container,
  Col,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import { Component } from "react";
import APIURL from "../helpers/enviroment";

const Signup = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    fetch(`http://${APIURL}api/user/createuser`, {
      method: "POST",
      body: JSON.stringify({
        user: { username: username, password: password }
      }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(response => response.json())
      .then(data => {
        props.updateToken(data.sessionToken);
      });
  };

  return (
    <Container className="formApp">
      <i class="fa fa-user-plus fa-3x" aria-hidden="true"></i>
      <h2>Sign Up</h2>
      <Form className="form" onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <Input
            minLength="6"
            onChange={e => setUsername(e.target.value)}
            name="username"
            placeholder="email@email.com"
            type="email"
            id="email"
            value={username}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            minLength="6"
            onChange={e => setPassword(e.target.value)}
            name="password"
            placeholder="password"
            type="password"
            id="password"
            value={password}
          />
        </FormGroup>

        <Button type="submit" className="btn btn-primary btn-block">
          Signup
        </Button>
      </Form>
    </Container>
  );
};

export default Signup;
