import Headers from "../Components/Headers/Headers";
import headerImage from "../assets/car5.jpg";
import { getCategories } from "../data/categories"
import CategoryList from "../Components/CategoryList/CategoryList";

function Categories() {
  return (
    <>
      <Headers
        title="For you"
        image={headerImage}>
        A sports car or sports car is a conditionally generalized name for a wide class of two-, rarely four-seater cars,
      </Headers>

      <CategoryList categories={getCategories()} />
    </>
  );
}

export default Categories;
