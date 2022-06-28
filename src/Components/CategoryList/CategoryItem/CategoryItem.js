import { Link } from "react-router-dom";
import classes from "./CategoryItem.module.css";
import categoryImage from "../../../assets/car1.jpg";
import React from "react";

function CategoryItem({ category }) {
  return (
    <div className={classes.CategoryItem}>
      <img src={categoryImage} alt={category.title} />
      <Link to={"/categories/" + category.categoryId}>{category.title}</Link>
    </div>
  );
}

export default CategoryItem;
