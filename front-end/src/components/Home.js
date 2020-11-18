import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from "./TodoList";
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import CategoriesList from "./CategoriesList"
 
 const Home = (props) => {
     const [categories,setCategories] = useState([]);
     useEffect(()=>{getCategories()},[])

     const getCategories = async () => {
        try {
          const res = await axios.get('http://localhost:5000/categories')
          console.log('getCategories :', res.data)
          await setCategories(res.data);
        }
        catch (err) {
          console.log('ERR: ', err);
        };
      }

    return (
        <div className="home">
            <Route exact path="/">
                <div className="firstHome">
                    <div className="categories">
                    <CategoriesList categories={categories}/>
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
