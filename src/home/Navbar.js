import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";

import Signup from "../components/Signup";

// const Sitebar = props => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggle = () => {
//     let newIsOpen = !isOpen;
//     setIsOpen(newIsOpen);
//   };
//   return (
//     <Navbar color="faded" light expand="md">
//       <Container className="openContainer">
//         <NavbarBrand href="/">
//           <h3 className="alignHeader">KDP Inventory</h3>
//         </NavbarBrand>
//         <NavbarToggler onClick={toggle} />
//         <Collapse isOpen={isOpen} navbar>
//           <Nav className="ml-auto" navbar>
//             <NavItem>
//               {/* <Button onClick={props.clickLogout}>Logout</Button> */}
//             </NavItem>
//           </Nav>
//         </Collapse>
//       </Container>
//     </Navbar>
//   );
// };

const Sitebar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/Signup">Signup</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Sitebar;
