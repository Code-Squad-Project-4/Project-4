import React, { useState, useEffect } from 'react';
import TodoList from "./TodoList";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CategoriesList from "./CategoriesList"
import FreeDelivery from "./FreeDelivery"

const Home = (props) => {
    console.log('props.free :', props.free)   
    return (
        <div className="home">
            <Route exact path="/">
                <div className="firstHome">
                    <div className="categories">
                        <CategoriesList  categories={props.categories} category={props.category} categoryId={props.categoryId} />
                    </div>

                    <div className="Featured">
                        <FreeDelivery free={props.free} />
                    </div>

                    <div className="discount">
                        <Link to="/discount">Discounted Products</Link>
                    </div>
                </div>
                <div >
                    <TodoList products={props.products} product={props.product} />
                </div>
            </Route>
        </div>
    )
}

export default Home
