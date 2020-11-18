import React, { useState, useEffect } from 'react';
import TodoList from "./TodoList";
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
 
 const Home = (props) => {
    return (
        <div className="home">
            <Route exact path="/">
                <div className="firstHome">
                    <div className="categories">
                    b
                    </div>
                    <div className="Featured">
                        <div className="mainFeatured"></div>
                        <div className="topFeatured">
                        <div className="itemFeatured"></div>
                        <div className="itemFeatured" ></div>
                        <div className="itemFeatured" ></div>
                        <div className="itemFeatured" ></div>
                        <div className="itemFeatured" ></div>
                        </div>
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
