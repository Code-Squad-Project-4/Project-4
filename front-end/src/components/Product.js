import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import EditProduct from "./Edit_Product"


const Product = (props) => {

    // const clickHandler = (id) => {
    //     console.log("click handler id:", id)
    //     return <Redirect to = '/edit' id = {id}/>
    // }

    console.log("Props ID:", props.oneProduct.id)
    if (props.oneProduct.hide === "No") { 
    return (
    <div className = 'visibleProduct'> Visible Products
        <span>
        <img src={props.oneProduct.img_url} alt={props.oneProduct.description} width="400" height="400"/>
        </span>
        <span>
        {props.oneProduct.description}
        </span>
        <span>
        <button className ="button" >UPDATE</button>
        <button className ="button" onClick = {props.hideProduct.bind(this, props.oneProduct.id)}>HIDE</button>
        </span>
    </div>) } else { 

    return (
    <div className = 'hiddenProducts'> Hidden Products
        <span>
        <img src={props.oneProduct.img_url} alt={props.oneProduct.description} width="400" height="400"/>
        </span>
        <span>
        {props.oneProduct.description}
        </span>
        <span>
        <button className ="button"><Link to = {{pathname: "/edit", id: props.oneProduct.id}}>UPDATE </Link></button>
        <button className ="button" onClick = {props.showProduct.bind(this, props.oneProduct.id)}>SHOW</button>
        </span>
    </div>)}
      
    
}

export default Product;



