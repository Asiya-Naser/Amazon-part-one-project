import React from 'react'

import classes from "../Category/category.module.css";
const CategoryCard = (data) => {
  return (
    <div className={classes.category}>
        <a href="">
            <span>
                <h2>{data.title}</h2>
            </span>
            <img src={data.imageLink} alt="image" />
            <p>Shop Now</p>
        </a>
    </div>
  )
}

export default CategoryCard