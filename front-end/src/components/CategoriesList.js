import React from 'react';
import CategoriesItem from "./CategoriesItem"

const CategoriesList = (props) => {
    console.log('categories.props :', props)
    const arrCategories = props.categories.map((e, i) => (
        <CategoriesItem oneCategory={e} k={i} categories={props.categories} category={props.category} categoryId={props.categoryId} />
    ));
    return (
        <div className="categories-list" >
            <div className="mainCategory">Categories</div>
            <div className="category-item">{arrCategories}</div>
        </div>
    )
}

export default CategoriesList
