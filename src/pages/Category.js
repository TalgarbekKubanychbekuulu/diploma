import { useParams } from "react-router-dom";
import Headers from "../Components/Headers/Headers";
import ProductList from "../Components/ProductList/ProductList";
import { getCategory} from "../data/categories";
import { getProducts } from "../data/Products";



function Category() {
  const params = useParams();
  const category = getCategory(params.categoryId);
  if (!category) {
    return null;
  }

  // console.log(params);
  return ( 
    <>
      <div>
        <Headers title={category.title} image>
          <img src={category.image} alt="#"/>
          {category.desciption}
        </Headers>
      </div>
      <ProductList products={getProducts(category.categoryId)} />
    </>
  );
}

export default Category;