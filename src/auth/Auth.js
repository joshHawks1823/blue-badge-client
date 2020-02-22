import React, { useState } from "react";
// import { Container, Row, Col } from "reactstrap";
import Signup from "../components/Signup";
import Login from "../components/Login";

import {
  Container,
  Row,
  Button,
  Col,
  Modal,
  ModalHeader,
  Form,
  Label,
  Input
} from "reactstrap";
// const Auth = props => {
//   return (
//     <Container className="auth-container">
//       <Row>
//         <Col md="6">
//           {/* <Signup updateToken={props.updateToken} /> */}
//         </Col>
//         <Col md="6">
//           <Login updateToken={props.updateToken} />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Auth;

export function Auth(props) {
  const [showLogin, setShowLogin] = useState(true);
  const [buttonName, setButtonName] = useState("Signup Form");
  function toggleView() {
    if (showLogin === false) {
      setShowLogin(true);
      setButtonName("Signup Form");
    } else {
      setShowLogin(false);
      setButtonName("Login Form");
    }
  }
  return (
    <Container>
      {showLogin ? (
        <Login updateToken={props.updateToken} />
      ) : (
        <Signup updateToken={props.updateToken} />
      )}

      <Button className="home-btn" onClick={toggleView}>
        {buttonName}
      </Button>
    </Container>
  );
}

export default Auth;
