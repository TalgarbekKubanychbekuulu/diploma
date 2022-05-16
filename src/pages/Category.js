import { useParams } from "react-router-dom";
import Headers from "../Components/Headers/Headers";
import { getCategory } from "../data/categories";



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
      
    </>
  );
}

export default Category;