// import { useParams } from "react-router-dom";
// import Headers from "../Components/Headers/Headers";
// import ProductList from "../Components/ProductList/ProductList";
// import { getCategory} from "../data/categories";
// import { getProducts } from "../data/Products";
// import image from "../assets/car1.jpg"



// function Category() {
//   const params = useParams();
//   const category = getCategory(params.categoryId);
//   if (!category) {
//     return null;
//   }

//   return ( 
//     <>
//       <div>
//         <Headers title={category.title} image={image}>
//           {category.description}
//         </Headers>

//         <ProductList products={getProducts(category.categoryId)}/>
//       </div>
      
//     </>
//   );
// }

// export default Category;



   
import { useParams } from "react-router-dom";
import Headers from "../Components/Headers/Headers";
import ProductList from "../Components/ProductList/ProductList";
import { getCategory } from "../data/categories";
import { getProducts } from "../data/Products";

function Category() {
  const params = useParams();
  const category = getCategory(params.categoryId);

  if (!category) {
    return null;
  }

  return (
    <>
    <div>
      <Headers title={category.title} image={category.image}>
        {category.description}
      </Headers>

   
        <ProductList products={getProducts(category.categoryId)}/>
        </div>
    </>
  );
}

export default Category;