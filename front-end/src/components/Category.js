import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Product from "./Product";

const Category = (props) => {
    const arr = []
    console.log('props.category :', props)
    Object.keys(props.category).map((k, i) => {
        arr.push(props.category[i]);
    });

    return (
        <Router>
            {
                arr.map((e) => {
                    return <Link to={`/product/${e.name}`}>
                        <div className="infoPhoto"></div>
                    <div><h6 className="dollar">{"$"}</h6>{e.price}</div>
                    <div onClick={() =>  <Product />}>{e.name}</div>
                        </Link>
                })
            }

        </Router>
    )
}

export default Category

