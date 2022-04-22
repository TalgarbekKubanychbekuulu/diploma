import "./Pages.css"
import Headers from "../Components/Headers/Headers";
import headerImage from "../assets/car3.jpg";

function Home() {
  return (
    <>
      <Headers
        title="Welcome to  Sport cars!"
        image={headerImage}>
        A coffee bean is a seed of the Coffea plant and the source for coffee. It is the pip inside the red or purple fruit often referred to as a cherry. Just like ordinary cherries, the coffee fruit is also a so-called stone fruit. Even though the coffee beans are not technically beans, they are referred to as such because of their resemblance to true beans.
      </Headers>
    </>
  );
}

export default Home;