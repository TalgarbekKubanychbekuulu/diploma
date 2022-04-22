import headerImage from "../assets/car3.jpg";
import Headers from "../Components/Headers/Headers";

function NotFound() {
  return (
    <>
      <Headers
        title="Page not found"
        image={headerImage}>
        Maybe the page you are looking for was moved or deleted.
      </Headers>
    </>
  );
}

export default NotFound;