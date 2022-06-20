import { useParams } from "react-router-dom";
import Headers from "../Components/Headers/Headers";
import { getProducts } from "../data/Products";

function Product() {
  const params = useParams();
  const product = getProducts(params.productId);

  if (!product) {
    return null;
  }

  return (
    <>
      <Headers title={product.title} image={product.image}>
        {product.description}
      </Headers>
    </>
  );
}

export default Product;
