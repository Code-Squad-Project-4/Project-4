import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route, 
  Link, 
  Redirect
} from 'react-router-dom'; 

import './App.css';
import AddProduct from './components/AddProduct.js';
import Dashboard from './components/Dashboard.js';
import Display from './components/Display.js';
import EditProduct from './components/Edit_Product.js';
import History from './components/History.js';
import Requests from './components/Requests'

// Functional component


 const AppSeller = (props) => {
  
  let sellerId = 2
  
  const [products, setProducts] = useState([]);
  const [monthlySales, setMonthlySales] = useState([])
  const [itemsAvailable, setItemsAvailable] = useState([])
  const [sellerLogo, setSellerLogo] = useState([])
  const [itemsSold, setItemsSold] = useState([])
  const [rating, setRating] = useState([])
  const [history, setHistory] = useState([])

  const getUserURL = (sellerId) => {
  axios
    .get(`http://localhost:5000/seller/logo_url/${sellerId}`)
    .then((response) => {
      console.log('Respose: ', response)
      setSellerLogo(response.data)

    })
    .catch((err) => {

    })
}

const getCurrentMonthlySales = (sellerId) => {
  console.log("getCurrentMonthlySales called")
  axios
  .get(`http://localhost:5000/seller/monthly_sales/${sellerId}`)
  .then((response) => {
    console.log('Respose data: ', response.data)
    setMonthlySales(response.data)
    console.log("ProducmonthlySales :", monthlySales)
    
  })
  .catch((err) => {

  })
}

const totalNumberOfItemsAvailable = (sellerId) => {
  console.log("totalNumberOfItemsAvailable called")
    axios
    .get(`http://localhost:5000/seller/items_available/${sellerId}`)
    .then((response) => {
      // console.log('Respose: ', response.data)
      setItemsAvailable(response.data)
      // console.log("Products :", products)
      
    })
    .catch((err) => {

    })
}

const totalNumberOfItemsSold = (sellerId) => {
  console.log("totalNumberOfItemsSold called")
    axios
    .get(`http://localhost:5000/seller/items_sold/${sellerId}`)
    .then((response) => {
      // console.log('Respose: ', response.data)
      setItemsSold(response.data)
      // console.log("Products :", products)
      
    })
    .catch((err) => {

    })
}

const sellerRating = (sellerId) => {
  console.log("sellerRating called")
    axios
    .get(`http://localhost:5000/seller/rating/${sellerId}`)
    .then((response) => {
      // console.log('Respose: ', response.data)
      setRating(response.data)
      // console.log("Products :", products)
      
    })
    .catch((err) => {

    })

}

const getAllMyProducts = (sellerId) => {
    console.log("getAllMyProducts called")
    axios
    .get(`http://localhost:5000/seller/products/${sellerId}`)
    .then((response) => {
      // console.log('Respose: ', response.data)
      setProducts(response.data)
      // console.log("Products :", products)
      
    })
    .catch((err) => {

    })
}

const updateProduct = (body) => {
  console.log("updateProduct...... has been called")
  console.log(body)
  console.log("seller ID ", sellerId)
  axios
    .put(`http://localhost:5000/seller/products/update/${sellerId}`, body)
    .then((response) => {
      console.log('Respose: ', response)
      getAllMyProducts(sellerId)
      
    })
    .catch((err) => {

    })
}

const hideProduct = (id) => {
  console.log("hideProduct called")
  console.log("ID :", id)
  axios
  .put(`http://localhost:5000/seller/products/hide/${id}`, {seller_id:sellerId})
  .then((response) => {
    // console.log('Respose: ', response.data)
    // setProducts(response.data)
    console.log(response.data)
    getAllMyProducts(sellerId)
    
  })
  .catch((err) => {

  })
}

const showProduct = (id) => {
  console.log("showProduct called")
  console.log("ID :", id)
  axios
  .put(`http://localhost:5000/seller/products/show/${id}`, {seller_id:sellerId})
  .then((response) => {
    // console.log('Respose: ', response.data)
    // setProducts(response.data)
    console.log(response.data)
    getAllMyProducts(sellerId)
    
  })
  .catch((err) => {

  })
}

const addProduct = (body) => {
  console.log("addProduct...... has been called")
  console.log(body)
  axios
    .post(`http://localhost:5000/seller/products/add/${sellerId}`, body)
    .then((response) => {
      console.log('Respose: ', response)
      getAllMyProducts(sellerId)
      
    })
    .catch((err) => {

    })
}

const salesHistory = (sellerId) => {
  console.log("salesHistory called")
    axios
    .get(`http://localhost:5000/seller/sales_history/${sellerId}`)
    .then((response) => {
      console.log('Respose: ', response.data)
      setHistory(response.data)
      // console.log("Products :", products)
      
    })
    .catch((err) => {

    })
}

useEffect(() => {
  getAllMyProducts(sellerId)
  getCurrentMonthlySales(sellerId)
  totalNumberOfItemsAvailable(sellerId)
  getUserURL(sellerId)
  totalNumberOfItemsSold(sellerId)
  sellerRating(sellerId)
  salesHistory(sellerId)
}, [])

    return (
      <Router>
      <div className = "app">
        <h1> My Shop</h1>
      <span className = "nav_container">
      <ul>
        <li><Link to = '/dashboard'> Account Dashboard </Link></li>
        <li><Link to = '/display'> My Store </Link> </li>
        <li><Link to = '/add_product'> Add Product </Link> </li>
        <li><Link to = '/requests'> Requests </Link> </li>
        {/* <li><Link to = '/edit_product'> Edit Product </Link></li> */}
        <li><Link to = '/history'> History </Link></li>
        <li><Link to = '/messages'> Messages </Link></li>
      </ul>
      </span>
      <div className = "display_container">
        {/* <h1>Display Area</h1> */}
        <Route path = '/dashboard' render = {(props) => <Dashboard {...props} 
          dashMonSales = {monthlySales} 
          itemsAvailable = {itemsAvailable}
          logo = {sellerLogo} 
          itemsSold = {itemsSold}
          myRating = {rating}/>}/>
        <Route path = '/display' render = {(props) => <Display {...props} list = {products} hideProduct = {hideProduct} showProduct = {showProduct} updateProduct = {updateProduct}/>}/>
        <Route path = '/add_product' render = {(props) => <AddProduct {...props} addProduct = {addProduct}/>}/>
        {/* <Route path = '/edit_product' render = {(props) => <EditProduct {...props}/>}/> */}
        <Route path = '/requests' render = {(props) => <Requests {...props}/>}/>
        <Route path = '/history' render = {(props) => <History {...props} mySalesHistory = {history}/>}/>
        <Route path = '/edit' render = {(props) => <EditProduct {...props} editProduct = {updateProduct}/>}/>
      </div>
      <footer>
        Footer
      </footer>
      </div>
      </Router>
    );
}

export default AppSeller;

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
