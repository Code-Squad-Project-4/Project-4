import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import "../../src/App.css";

import Category from "./Category";

const CategoriesItem = (props) => {
    const { oneCategory, i } = props;
    const { name, id } = oneCategory;
      console.log('category :', props.category)

    return (
        <Router>
            <Link to={`/category/${name}`}>
                <div className="category-item" >
                    <div className="category-item" onClick={() => { props.categoryId(id) }}>{name}</div>
                    <Route path={`/category/:i`} ><Category  category={props.category} name={name} /> </Route>  
                </div>
            </Link>

        </Router>
    );
}

export default CategoriesItem

