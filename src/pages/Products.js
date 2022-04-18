import "./Pages.css"
import Headers from "../Components/Headers/Headers";
import headerImage from "../assets/car4.jpg";

function Products() {
  return (
    <>
      <Headers
        title="Pick your type of coffee!"
        image={headerImage}>
        The fruits; cherries or berries, most commonly contain two stones with their flat sides together. A small percentage of cherries contain a single seed, instead of the usual two. This is called a "peaberry".
      </Headers>
    </>
  );
}

export default Products;