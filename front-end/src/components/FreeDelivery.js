import React, { useState, useEffect } from 'react';
import Product from './Product';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const FreeDelivery = (props) => {
    const freeArr = props.free.map((e, i) => e.name)
    return (
        <>
            <Link to={`/product/${freeArr[0]}`}> <div className="mainFeatured" onClick={() => <Product />}>{freeArr[0]}</div> </Link>
            <div className="topFeatured">
                <Link to={`/product/${freeArr[1]}`}><div className="itemFeatured" onClick={() => <Product />}>{freeArr[1]}</div></Link>
                <Link to={`/product/${freeArr[2]}`}><div className="itemFeatured" onClick={() => <Product />}>{freeArr[2]}</div></Link>
                <Link to={`/product/${freeArr[3]}`}><div className="itemFeatured" onClick={() => <Product />}>{freeArr[3]}</div></Link>
                <Link to={`/product/${freeArr[4]}`}><div className="itemFeatured" onClick={() => <Product />}>{freeArr[4]}</div></Link>
                <Link to={`/product/${freeArr[5]}`}><div className="itemFeatured" onClick={() => <Product />}>{freeArr[5]}</div></Link>
            </div>
        </>
    )
}

export default FreeDelivery


