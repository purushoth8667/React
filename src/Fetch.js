import React, { useEffect, useState } from 'react'

const Fetch=()=> {
   const [products,setProducts]=useState([]);
   useEffect(()=>{
       const fetchproducts=async()=>{
        try{
        const response=await fetch("http://localhost:8080/getuser");
        const data=await response.json();
         console.log(data);
        setProducts(data)
        }catch(error){
         console.log("error while fetching data:",error);
        }
    }
    fetchproducts();
   },[]);
   return (
    <div>
        <h1>Product List</h1>
        <ol>
            {products.map((product)=>(
            <li key={product.productId}>
            <p>ProductName:{product.productName}</p>
             <p>ProductModel:{product.productModel}</p>
             <p>ProductAmount:{product.productAmount}</p>
             <p>ProductQuantity:{product.productQuantity}</p>
            </li>
            ))}
        </ol>
    </div>
  )
}

export default Fetch;