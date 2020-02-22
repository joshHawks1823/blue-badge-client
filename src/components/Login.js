import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Container } from "reactstrap";
import APIURL from "../helpers/enviroment";
import Signup from "../components/Signup";

const Login = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    fetch(`http://${APIURL}/api/user/signin`, {
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
      <i class="fa fa-sign-in fa-3x" aria-hidden="true"></i>
      <h2>Login</h2>
      <Form className="form" onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <Input
            minLength="6"
            onChange={e => setUsername(e.target.value)}
            name="email"
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
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
