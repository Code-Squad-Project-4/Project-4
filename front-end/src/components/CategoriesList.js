import React from 'react';
import CategoriesItem from "./CategoriesItem"

const CategoriesList = (props) => {
    const arrCategories = props.categories.map((e, i) => (
        <CategoriesItem oneCategory={e} i={i} />
    ));
    return (
        <div className="categories-list" >
            <div>Categories</div>
            {arrCategories}
        </div>
    )
}

export default CategoriesList
