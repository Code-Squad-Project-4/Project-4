import React from 'react';
import "../../src/App.css";
import TodoItem from './TodoItem';

const TodoList = (props) => {
  console.log('products :', props.products)
  const todoTasks = props.products.map((e, i) => (
    <TodoItem oneProduct={e} i = {i} product={props.product}/>
  ));
  return (
    <div className="product-list">
      {todoTasks}
    </div>
  );
}

export default TodoList
