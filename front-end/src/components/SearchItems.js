import React, { useState } from 'react';
import { MdSearch } from "react-icons/md";

const SearchItems = (props) => {
    const [textInput, setTextInput] = useState("");
    const [id, setId] = useState("");

    const handleInputChange = async(e) => {
        setId(e.target.value)
        setTextInput(e.target.value)
     };

    const searchItems = async () => {
        props.search(id)
        setTextInput("")
        setId("")
     };

    return (
        <div className="new-item">
            <input
                type="text"
                placeholder={`search`}
                onChange={handleInputChange}
            />
            <button className="button" onClick={searchItems}><MdSearch />search</button>
        </div>
    );
};

export default SearchItems