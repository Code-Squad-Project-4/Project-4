import React from 'react';
import CategoriesItem from "./CategoriesItem"

const CategoriesList = (props) => {
    const arrCategories = props.categories.map((e, i) => (
        <CategoriesItem oneCategory={e} i={i} category={props.category} categoryId={props.categoryId} />
    ));
    return (
        <div className="categories-list" >
            <div className="mainCategory">Categories</div>
            <div className="category-item">{arrCategories}</div>
        </div>
    )
}

export default CategoriesList
