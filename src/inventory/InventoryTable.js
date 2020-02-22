import React, { useState, useEffect } from "react";
import {
  Table,
  Button,
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  Nav
} from "reactstrap";
import APIURL from "../helpers/enviroment";

const InventoryTable = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    let newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
  };
  const deleteInventory = inventory => {
    fetch(`http://${APIURL}/inventory/delete/${inventory.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token
      })
    }).then(() => props.fetchInventory());
  };

  const inventoryMapper = () => {
    return props.inventory.map((inventory, index) => {
      return (
        <tr key={index}>
          {/* <th scope="row">{inventory.id}</th> */}
          <td className="inventoryFont">{inventory.inventoryData}</td>
          <td className="inventoryFont">{inventory.inventoryCount}</td>
          <td>
            <Button
              // color="warning"
              className="updateBtn"
              onClick={() => {
                props.editUpdateInventory(inventory);
                props.updateOn();
              }}
            >
              Update
            </Button>
            <Button
              // color="danger"
              className="dangerBtn"
              onClick={() => {
                deleteInventory(inventory);
              }}
            >
              Delete
            </Button>
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      <div className="table-body">
        <h3>KDP Inventory</h3>
        <hr />
        <Table striped>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Pallet Count</th>
            </tr>
          </thead>
          <tbody>{props.inventory.length > 0 ? inventoryMapper() : null}</tbody>
        </Table>
      </div>
    </>
  );
};

export default InventoryTable;
