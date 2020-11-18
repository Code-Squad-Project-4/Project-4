import React, { useState } from 'react';

const NewItem = (props) => {
  const [textInput, setTextInput] = useState("");

  const [id, setId] = useState(Math.floor(Math.random() * 100));

  const handleInputChange = async (e) => {
    setId(Number(e.target.value))
  }

  const addNewItem = () => {
    props.add({ id, version, product, price, category, department })
    setTextInput("")
  }

  return (
    <div className="new-item">
          <input
            type="text"
            placeholder= {`write new item`}
            onChange={e => handleInputChange(e)}
          />      
      <button class="button" onClick={addNewItem} >Add</button>
    </div>
  );
}

export default NewItem

