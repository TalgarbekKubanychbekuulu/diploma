import Headers from "../Components/Headers/Headers";
import headerImage from "../assets/car2.jpg";
import ProductList from "../Components/ProductList/ProductList";
import { getProducts } from "../data/Products";

function Products() {
  return (
    <>
      <Headers
        title="Products"
        image={headerImage}>
A sports car or sports car is a conditionally generalized name for a wide class of two-, rarely four-seater cars,      </Headers>

      <ProductList products={getProducts()} />
    </>
  );
}

export default Products;