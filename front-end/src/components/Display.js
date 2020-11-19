import React from 'react';
import Product from './Product'

const Display = (props) => {

    // console.log("Props.list :", props.list)
    const product = props.list.map((elem, i) => 
    <Product oneProduct={elem} key={i} num={i+1} hideProduct = {props.hideProduct} showProduct = {props.showProduct} updateProduct = {props.updateProduct}/>)
    return (
      <div className = 'display'>
          {product}
      </div>
    );
}

export default Display;