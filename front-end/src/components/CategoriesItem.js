import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import "../../src/App.css";
import App from "../App"

import Category from "./Category";

const CategoriesItem =  (props) => {
    const { oneCategory, k, category, categoryId } = props;
    const { name, id } = oneCategory;
    const arr = []
    Object.keys(props.category).map((k, i) => { arr.push(props.category[i].category_id); });
    const one_category = props.categories.map((e) => { if (e.id == arr[0]) return e.name }).filter((e) => { return e })
    console.log('props.category[0]:', category)
    return (
        <Router>
                 <Link to={`/category/${one_category[0]}`} >
                <div>
                    <div className="category-item" onClick={() => { categoryId(id) }}>{name}</div>
                </div>
            </Link>
             <Route exact path={`/category/${one_category[0]}`} ><Category category={category} name={one_category[0]} /> </Route>

            {/* <Route path="/category/:i" render={(props) => <Category {...props} category={props.category} />} /> */}
        </Router >
    );
}

export default CategoriesItem

