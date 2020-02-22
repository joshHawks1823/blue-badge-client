import React, { useState } from "react";
import {
  Modal,
  Form,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Button,
  Input
} from "reactstrap";

import APIURL from "../helpers/enviroment";

const InventoryEdit = props => {
  const [editData, setEditData] = useState(
    props.inventoryToUpdate.inventoryData
  );
  const [editCount, setEditCount] = useState(
    props.inventoryToUpdate.inventoryCount
  );

  const inventoryUpdate = event => {
    event.preventDefault();
    fetch(`http://${APIURL}/inventory/update/${props.inventoryToUpdate.id}`, {
      method: "PUT",
      body: JSON.stringify({
        inventory: {
          inventoryData: editData,
          inventoryCount: editCount
        }
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token
      })
    }).then(res => {
      props.fetchInventory();
      props.updateOff();
    });
  };

  return (
    <Modal isOpen={true}>
      <ModalHeader>Update Product</ModalHeader>
      <ModalBody>
        <Form onSubmit={inventoryUpdate}>
          <FormGroup>
            <Label htmlFor="inventoryData">Edit Product:</Label>
            <Input
              name="inventoryData"
              value={editData}
              onChange={e => setEditData(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="inventoryCount">Edit Pallet Count:</Label>
            <Input
              name="inventoryCount"
              value={editCount}
              onChange={e => setEditCount(e.target.value)}
            />
          </FormGroup>
          <Button className="modal-btn" type="submit">
            Update the Inventory
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default InventoryEdit;
