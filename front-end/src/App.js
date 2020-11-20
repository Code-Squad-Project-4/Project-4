import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route, 
  Link, 
  Redirect
} from 'react-router-dom'; 

import './App.css';

import AppSeller from './AppSeller.js'

// Functional component


 const App = (props) => {
  
 
    return (
      <Router>
      <>
       <AppSeller/>
      </>
      </Router>
    );
}

export default App;

/* 
// functional component
const App = () => {
  return (
    <div>
      <h1>HELLO WORLD</h1>
    </div>
  );
};
export default App;
*/

// mainRouter.get("/logo_url/:id", getUserURL)
//    mainRouter.get("/monthly_sales/:id", getCurrentMonthlySales)
//    mainRouter.get("/items_available/:id", totalNumberOfItemsAvailable)
//    mainRouter.get("/items_sold/:id", totalNumberOfItemsSold)
//    mainRouter.get("/rating/:id", sellerRating)
//    mainRouter.get("/products/:id", getAllMyProducts)
//    mainRouter.put("/products/update/:id ", updateProduct) //send {seller_id : id} in params and product id in params
//    mainRouter.put("/products/hide/:id", hideProduct) //send {seller_id : id} in body and product id in params
//    mainRouter.put("/products/show/:id", showProduct) //send {seller_id : id} in body and product id in params
//    mainRouter.post("/products/add/:id", addProduct)
//    mainRouter.get("/sales_history/:id", salesHistory)
