import React, { useState } from 'react';

const AddProduct = (props) => {
const [name, setName] = useState([])
const [price, setPrice] = useState([])
const [description, setDescription] = useState([])
const [newprice, setNewprice] = useState([])
const [quantity, setQuantity] = useState([])
const [img_url, setImg_url] = useState([])
const [category_id, setCategory_id] = useState([])
const [hide, setHide] = useState([])

  const body = {
    name: name, 
    price: price,
    description: description,
    newprice: newprice,
    quantity: quantity,
    img_url: img_url,
    category_id: category_id, 
    hide: hide
  }
    
    
  

  const nameHandler = (e) => {
      setName(e.target.value)
  }

  const priceHandler = (e) => {
      setPrice(e.target.value)
  }

  const decritionHandler = (e) => {
      setDescription(e.target.value)
  }

  const newPriceHandler = (e) => {
      setNewprice(e.target.value)
  }

  const quantityHandler = (e) => {
      setQuantity(e.target.value)
  }

  const imgUrlHandler = (e) => {
      setImg_url(e.target.value)
  }

  const categoryIdHandler = (e) => {
      setCategory_id(e.target.value)
  }

  const hideHandler = (e) => {
      setHide(e.target.value)
  }

  const addNew = () => {
     console.log("addNew has been called")
      props.addProduct(body)
  }
  
    return (
    <div className = 'add_product'>
        <p>Add Product</p>
        <div className = "new_product_input">
        <div><span>Product Name : </span><input placeholder = "Name" onChange = {nameHandler}></input></div>
        <div><span>Product Price : </span><input placeholder = "Price" onChange = {priceHandler}></input></div>
        <div><span>Product Descrition : </span><input placeholder = "Descrition" onChange = {decritionHandler}></input></div>
        <div><span>Product New Price : </span><input placeholder = "Newprice" onChange = {newPriceHandler}></input></div>
        <div><span>Product Quantity : </span><input placeholder = "Quantity" onChange = {quantityHandler}></input></div>
        <div><span>Product Img URL : </span><input placeholder = "Img_url" onChange = {imgUrlHandler}></input></div>
        <div><span>Product Category Id : </span><input placeholder = "Category Id" onChange = {categoryIdHandler}></input></div>
        <div><span>Product Hide : </span><input placeholder = "Hide : No / Yes" onChange = {hideHandler}></input></div>
        <div><button onClick = {addNew}>Add</button></div>
        </div>
    </div>
    );
}

export default AddProduct;
