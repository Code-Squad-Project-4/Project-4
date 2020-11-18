import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Product from "./Product";

import "../../src/App.css";

const TodoItem = (props) => {
    const { oneProduct, i ,product} = props;
    const { name, price } = oneProduct;
     return (
        <Router>
           <Link to={`/product/${name}`}>
                <div className="product-item" onClick={ () => { product(name)},<Product/>}>
                    <div className="infoPhoto"></div>
                    <div><h6 className="dollar">{"$"}</h6>{price}</div>
                    <div>{name}</div>
                </div>
            </Link>
        </Router>
    );
}

export default TodoItem


