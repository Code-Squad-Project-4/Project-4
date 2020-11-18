import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import "../../src/App.css";

const TodoItem = (props) => {
    const { oneCategory, i } = props;
    const { name, id } = oneCategory;
    return (
        <Router>
            <div className="product-item" >
                {name}
            </div>
        </Router>
    );
}

export default TodoItem


{/* <div className="product-item" onClock={ <link to = "/ca/name"}>
{name}
</div> */}