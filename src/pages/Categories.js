import Headers from "../Components/Headers/Headers";
import headerImage from "../assets/car5.jpg";
import { getCategories } from "../data/categories";
import CategoryList from "../Components/CategoryList/CategoryList";

function Categories() {
  return (
    <>
      <Headers title="For you" image={headerImage}>
        A sports car or sports car is a conditionally generalized name for a
        wide class of two-, rarely four-seater cars,
        <p>
          <strong>Which system is safer iOS or Android?</strong>
          <br />
          security. While
          <mark>iOS may be considered more secure,</mark>
          it's not impossible for cybercriminals to hit iPhones or iPads with
          malicious software. Because of this, the owners of both Android and
          iOS devices need to be aware of possible malware and viruses, and be
          careful when downloading apps from third-party app stores.
        </p>
      </Headers>

      <CategoryList categories={getCategories()} />
    </>
  );
}

export default Categories;
