import { Link } from "react-router-dom";
import classes from "./CategoryItem.module.css";
import categoryImage from "../../../assets/car1.jpg"

function CategoryItem({ category }) {
  return (
    <div className={classes.CategoryItem}>
      <img src={categoryImage} alt={category.title} />
      <Link to={"/categories/" + category.categoryId}>{category.title}</Link>
      {/* <div className={classes.price}><img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Lamborghini_Logo.svg/640px-Lamborghini_Logo.svg.png" alt="" width="55px" height="55px" /> {product.price}</div>
      <div className={classes.paper}><img src="https://thumbs.dreamstime.com/b/%D1%81%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB-%D0%BA%D0%BB%D1%83%D0%B1%D0%B0-%D0%B3%D0%BE%D0%BD%D0%BE%D0%BA-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-134551668.jpg" alt="" width="55px" height="55px" /> {product.price}</div> */}
    </div>
  );
}

export default CategoryItem;
