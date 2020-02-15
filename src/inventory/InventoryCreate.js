import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import APIURL from "../helpers/enviroment";

const InventoryCreate = props => {
  const [inventoryData, setInventoryData] = useState("");
  const [inventoryCount, setInventoryCount] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`${APIURL}/inventory/create`, {
      method: "POST",
      body: JSON.stringify({
        inventory: {
          inventoryData: inventoryData,
          inventoryCount: inventoryCount
        }
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token
      })
    })
      .then(res => res.json())
      .then(logData => {
        console.log(logData);
        setInventoryData("");
        setInventoryCount("");
        props.fetchInventory();
      });
  };

  return (
    <>
      <h3>Log A Product To Inventory</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="Product">Product Name:</Label>
          <Input
            name="inventoryData"
            value={inventoryData}
            onChange={e => setInventoryData(e.target.value)}
            placeholder="e.g. 20oz Sunkist Orange"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="inventoryCount">#</Label>
          <Input
            placeholder="e.g. 8"
            name="inventoryCount"
            value={inventoryCount}
            onChange={e => setInventoryCount(e.target.value)}
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
};

export default InventoryCreate;
