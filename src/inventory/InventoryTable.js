import React from "react";
import { Table, Button } from "reactstrap";
import APIURL from "../helpers/enviroment";

// const InventoryTable = props => {
//   const deleteInventory = inventory => {
//     fetch(`http://localhost:4000/inventory/delete/${inventory.id}`, {
//       method: "DELETE",
//       headers: new Headers({
//         "Content-Type": "application/json",
//         Authorization: props.token
//       })
//     }).then(() => props.fetchInventory());
//   };

//   const inventoryMapper = () => {
//     return props.inventory.map((inventory, index) => {
//       return (
//         <tr key={index}>
//           <td scope="row">{inventory.inventoryData}</td>
//           <td>{inventory.inventoryCount}</td>
//           <td>
//             <Button
//               color="warning"
//               onClick={() => {
//                 props.editUpdateInventory(inventory);
//                 props.updateOn();
//               }}
//             >
//               Update
//             </Button>
//             <Button
//               color="danger"
//               onClick={() => {
//                 deleteInventory(inventory);
//               }}
//             >
//               Delete
//             </Button>
//           </td>
//         </tr>
//       );
//     });
//   };
//   return (
//     <>
//       <h3>KDP Inventory</h3>
//       <hr />
//       <Table striped>
//         <thead>
//           <tr>
//             <th>Product Name</th>
//             <th>Total Pallets</th>
//           </tr>
//         </thead>
//         <tbody>{inventoryMapper()}</tbody>
//       </Table>
//     </>
//   );
// };

const InventoryTable = props => {
  const deleteInventory = inventory => {
    fetch(`${APIURL}/inventory/delete/${inventory.id}`, {
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
          <td>{inventory.inventoryData}</td>
          <td>{inventory.inventoryCount}</td>
          <td>
            <Button
              color="warning"
              onClick={() => {
                props.editUpdateInventory(inventory);
                props.updateOn();
              }}
            >
              Update
            </Button>
            <Button
              color="danger"
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
