import React from 'react';
import "../../src/App.css";
import ProductItem from './ProductItem';

const ProductList = (props) => {
  const todoTasks = props.products.map((e, i) => (
    <ProductItem oneProduct={e} i = {i} product={props.product}/>
  ));
  return (
    <div className="product-list">
      {todoTasks}
    </div>
  );
}

export default ProductList
