import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SearchItems from "./components/SearchItems";
import SearchProducts from "./components/SearchProducts";
import About from "./components/About";
import Discounted from "./components/Discounted";
import Product from "./components/Product";

const App = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [discountedProducts, setDiscountedProducts] = useState([]);

  const [searchP, setSearchP] = useState([]);
  const [info, setInfo] = useState([
    { name: 'Alaa Khalila', position: 'Full-Stack Dev', phone: '0795846987', email: 'Alaa@gmail.com' },
    { name: 'Fadi Al-fuqaha', position: 'Full-Stack Dev', phone: '0785846987', email: 'Fadi@gmail.co' },
    { name: 'Omar Alkhatib', position: 'Full-Stack Dev', phone: '0775846987', email: 'Omar@gmail.com' },
    { name: 'Shehadeh Almomani', position: 'Full-Stack Dev', phone: '0795846988', email: 'Shehadeh@gmail.com' }
  ]);

  useEffect(() => { getAllProducts() }, []);
  useEffect(() => { discount() }, []);
  useEffect(() => { searchProducts() }, []);
  useEffect(() => { oneProduct() }, []);

  const getAllProducts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/products')
      console.log('getAllProducts :', res.data)
      await setProducts(res.data);
    }
    catch (err) {
      console.log('ERR: ', err);
    };
  }

  const oneProduct = async (id) => {
    try {
      const res = await axios.get(`http://localhost:5000/product/${id}`)
      console.log('res.data :', res.data)
      await setProduct(res.data);
    }
    catch (err) {
      console.log('ERR: ', err);
    };
  }

  const discount = async () => {
    try {
      const res = await axios.get('http://localhost:5000/discounted')
      await setDiscountedProducts(res.data);
    }
    catch (err) {
      console.log('ERR: ', err);
    };
  }

  const searchProducts = async (i) => {
    try {
      const res = await axios.get(`http://localhost:5000/searchProducts/${i}`)
      console.log('res.data :', res.data)
      if (res.data.length) {
        await setSearchP(res.data);
      } else {
        console.log('res.data:', "Not found")
        return "Not found";
      }
    }
    catch (err) {
      console.log('ERR: ', err);
    };
  };

  return (
    <Router>

      <NavBar />
      <div>
        <Link to="/searchProducts"><SearchItems search={searchProducts} /></Link>
      </div>

      <Home products={products} product={product} />

      <Route path="/about" render={(props) => <About {...props} {...info} />} />
      <Route path="/discount" render={(props) => <Discounted {...props} {...discountedProducts} product={oneProduct} />} />
      <Route path="/searchProducts" render={(props) => <SearchProducts {...props} {...searchP} search={searchProducts} product={oneProduct} />} />
      <Route path="/product/:id" render={(props) => <Product {...props} products={products} />} />

    </Router>
  );
};

export default App;
