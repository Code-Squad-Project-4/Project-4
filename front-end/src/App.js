import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from "./components/NavBar";
import About from "./components/About";
import SearchItems from "./components/SearchItems";
import SearchProducts from "./components/SearchProducts";

const App = () => {  
  const [info, setInfo] = useState([
    { name: 'Alaa Khalila', position: 'Full-Stack Dev', phone: '0795846987', email: 'Alaa@gmail.com' },
    { name: 'Fadi Al-fuqaha', position: 'Full-Stack Dev', phone: '0785846987', email: 'Fadi@gmail.co' },
    { name: 'Omar Alkhatib', position: 'Full-Stack Dev', phone: '0775846987', email: 'Omar@gmail.com' },
    { name: 'Shehadeh Almomani', position: 'Full-Stack Dev', phone: '0795846988', email: 'Shehadeh@gmail.com' }
  ]);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [searchP, setSearchP] = useState([]);
  useEffect(() => { getAllProducts() }, []);
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

      <Route path="/about" render={(props) => <About {...props} {...info} />} />
      <Route path="/searchProducts" render={(props) => <SearchProducts {...props} {...searchP} search={searchProducts} product={oneProduct} />} />

    </Router>
  );
};

export default App;