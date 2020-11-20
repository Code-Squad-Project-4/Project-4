import React, { useState, useEffect } from 'react';

const Product = (props) => {
    const product = props.products.filter((e) => { return e.name === props.match.params.id })
    return (
        <div>
            {
                product.map((e) => {
                    return <div className="specificProduct">

                        <div className="descriptionProduct" >
                            <div className="infoPhoto"></div>
                            <div><h6 className="dollar">{"$"}</h6>{e.price}</div>
                        </div>

                        <div className="infoProduct">
                            <div>{e.name}</div>
                            <div>{e.description}</div>
                            <div>{e.quantity}</div>
                        </div>

                    </div>
                })
            }

        </div>
    )
}

export default Product
