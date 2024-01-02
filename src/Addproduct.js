import React, { useState } from 'react'

function Addproduct() {
    const [newProductId, setNewProductId] = useState("");
    const [newProductName, setNewProductName] = useState("");
    const [newProductAmount, setNewProductAmount] = useState("");
    const [newProductQuantity, setNewProductQuantity] = useState("");
    const [newProductModel, setNewProductModel] = useState("");
    const createNewData = () => {
      const newData = {
        productId: newProductId,
        productName: newProductName,
        productAmount: newProductAmount,
        productQuantity: newProductQuantity,
        productModel: newProductModel,
      };
  
      fetch("http://localhost:8080/adduser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      })
        .then((response) => response.json())  
        .then((data) => {
          // Handle the response data if needed
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
  
    return (
      <div>
        <input
          type="text"
          value={newProductId}
          onChange={(e) => setNewProductId(e.target.value)}
          placeholder="Product ID"
        />
        <input
          type="text"
          value={newProductName}
          onChange={(e) => setNewProductName(e.target.value)}
          placeholder="Product Name"
        />
        <input
          type="text"
          value={newProductAmount}
          onChange={(e) => setNewProductAmount(e.target.value)}
          placeholder="Product Amount"
        />
        <input
          type="text"
          value={newProductModel}
          onChange={(e) => setNewProductModel(e.target.value)}
          placeholder="Product Model"
        />
        <input
          type="text"
          value={newProductQuantity}
          onChange={(e) => setNewProductQuantity(e.target.value)}
          placeholder="Product Quantity"
        />
        <button onClick={createNewData}>Create Data</button>
      </div>
    );
  }

export default Addproduct