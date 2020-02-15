import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import InventoryCreate from "./InventoryCreate";
import InventoryTable from "./InventoryTable";
import InventoryEdit from "./InventoryEdit";
import APIURL from "../helpers/enviroment";

const InventoryIndex = props => {
  const [inventory, setInventory] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [inventoryToUpdate, setInventoryToUpdate] = useState({});

  const editUpdateInventory = inventory => {
    setInventoryToUpdate(inventory);
    console.log(inventory);
  };

  const updateOn = () => {
    setUpdateActive(true);
  };
  const updateOff = () => {
    setUpdateActive(false);
  };

  const fetchInventory = () => {
    fetch(`${APIURL}/inventory/getall`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token
      })
    })
      .then(res => res.json())
      .then(logData => {
        setInventory(logData);
        console.log(logData);
      });
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  return (
    <Container>
      <Row>
        <Col md="3">
          <InventoryCreate
            fetchInventory={fetchInventory}
            token={props.token}
          />
        </Col>
        <Col md="9">
          <InventoryTable
            inventory={inventory}
            editUpdateInventory={editUpdateInventory}
            updateOn={updateOn}
            fetchInventory={fetchInventory}
            token={props.token}
          />
        </Col>
        {updateActive ? (
          <InventoryEdit
            inventoryToUpdate={inventoryToUpdate}
            updateOff={updateOff}
            token={props.token}
            fetchInventory={fetchInventory}
          />
        ) : (
          <> </>
        )}
      </Row>
    </Container>
  );
};

export default InventoryIndex;
