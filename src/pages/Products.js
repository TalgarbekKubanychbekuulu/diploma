import Headers from "../Components/Headers/Headers";
import headerImage from "../assets/car2.jpg";
import ProductList from "../Components/ProductList/ProductList";
import { getProducts } from "../data/Products";

function Products() {
  return (
    <>
      <Headers
        title="Pick your type of coffee!"
        image={headerImage}>
        The fruits; cherries or berries, most commonly contain two stones with their flat sides together. A small percentage of cherries contain a single seed, instead of the usual two. This is called a "peaberry".
      </Headers>

      <ProductList products={getProducts()} />
    </>
  );
}

export default Products;