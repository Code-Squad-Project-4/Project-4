import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

const Category = (props) => {
    const arr = []
    Object.keys(props.category).map((k, i) => {
        arr.push(props.category[i]);
    });

    return (
        <Router>
            {
                arr.map((e) => {
                    return <Link to={`/category/${props.name}`}>
                    <div className="category-item" >
                        <div className="infoPhoto"></div>
                        <div><h6 className="dollar">{"$"}</h6>{e.price}</div>
                        <div>{e.name}</div>
                    </div>
                    </Link>
                })
            }
        </Router>
    )
}

export default Category

