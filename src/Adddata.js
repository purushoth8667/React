import React, { useState } from 'react'

const Adddata=()=> {
    const [formData, setFormData] = useState({
        productId: '',
        productName: '',
        productModel: '',
        productAmount: '',
        productQuantity: '',
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleApiCall = async () => {
        try {
          const response = await fetch('http://localhost:8080/adduser', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              // Add any other headers your API requires
            },
            body: JSON.stringify(formData),
          });
    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          const data = await response.json();
          // Handle the response data as needed
          console.log(data);
        } catch (error) {
          // Handle errors
          console.error('Error:', error.message);
        }
      };
    
      return (
        <div>
          <label>
            Product ID:
            <input
              type="text"
              name="productId"
              value={formData.productId}
              onChange={handleInputChange}
            />
          </label>
    
          <label>
            Product Name:
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleInputChange}
            />
          </label>
    
          <label>
            Product Model:
            <input
              type="text"
              name="productModel"
              value={formData.productModel}
              onChange={handleInputChange}
            />
          </label>
    
          <label>
            Product Amount:
            <input
              type="text"
              name="productAmount"
              value={formData.productAmount}
              onChange={handleInputChange}
            />
          </label>
    
          <label>
            Product Quantity:
            <input
              type="text"
              name="productQuantity"
              value={formData.productQuantity}
              onChange={handleInputChange}
            />
          </label>
    
          <button onClick={handleApiCall}>Submit</button>
        </div>
      );
    };

export default Adddata