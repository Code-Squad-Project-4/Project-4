import React from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

import Product from './Product';
const Discounted = (props) => {
    const arr = []
    Object.keys(props).map((k, i) => {
        if (props[i]) arr.push(props[i]);
    });
    return (
        <div className="product-list">
            {
                arr.map((e) => {
                    return <Router>
                        <Link to={`/product/${e.name}`}>
                            <div className="product-item" onClick={() => { props.product(e.name) }, <Product />}>
                                <div className="infoPhoto"></div>
                                <div><h6 className="dollar">{"$"}</h6>{e.newprice}</div>
                                <div className="oldPrice"><h6 className="dollar">{"$"}</h6>{e.price}</div>
                                <div>{e.name}</div>
                            </div>
                        </Link>
                    </Router>
                })
            }
        </div>
    );

}

export default Discounted
