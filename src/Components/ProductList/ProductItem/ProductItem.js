import { Link } from "react-router-dom";
import classes from "./ProductItem.module.css";


function ProductItem({ product }) {
  return (
    <div className={classes.ProductItem}>

      <img src={product.image} alt="product.title" />
      <Link to={"/products/" + product.productId}>{product.title}</Link>
      <div className={classes.price}><img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Lamborghini_Logo.svg/640px-Lamborghini_Logo.svg.png" alt="" width="55px" height="55px" /> {product.price}</div>


    </div>
  );
}

export default ProductItem;