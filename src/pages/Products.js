import Headers from "../Components/Headers/Headers";
import headerImage from "../assets/lampo.jpg";
// import ProductList from "../Components/ProductList/ProductList";
// import { getProducts } from "../data/Products";
import "./ser.css";
import { Link } from "react-router-dom";
function Products() {
  return (
    <>
      <Headers title=" &#8466; &#8475; &#95; Sport cars!" image={headerImage}>
        A sports car or sports car is a conditionally generalized name for a
        wide class of two, rarely four-seater cars,{" "}
      </Headers>

      {/* <CategoryList categories={getCategories()} /> */}

      <section className="section-products">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-8 col-lg-6">
              <div className="header">
                <h3>Featured Product</h3>
                <h2 className="pop">Popular Products</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div id="product-1" className="single-product">
                <div className="part-1">
                  <ul>
                    <li>
                      <a href="/">
                        <i className="fas fa-shopping-cart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fas fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fas fa-plus"></i>
                      </a>
                      
                    </li>
                  </ul>
                </div>
                <div className="part-2">
                  <h3 className="product-title">Lamborghini sport car</h3>
                  <h4 className="product-old-price">$79.99</h4>
                  <h4 className="product-price">$49.99</h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div id="product-2" className="single-product">
                <div className="part-1">
                  <span className="discount">15% off</span>
                  <ul>
                    <li>
                      {/* <a href="#">
                        {" "}
                        <i className="fas fa-shopping-cart"></i>
                      </a> */}
                      <Link to="/">  <i className="fas fa-shopping-cart"></i></Link>

                    </li>
                    <li>
                      {/* <a href="#">
                        {" "}
                        <i className="fas fa-heart"></i>
                      </a> */}
                         <Link to="/"> <i className="fas fa-heart"></i></Link>
                    </li>
                    <li>
                      {/* <a href="#">
                        {" "}
                        <i className="fas fa-plus"></i>
                      </a> */}
                      <Link to="/"> <i className="fas fa-plus"></i></Link>
                    </li>
                  </ul>
                </div>
                <div className="part-2">
                  <h3 className="product-title">Lamborghini sport car</h3>
                  <h4 className="product-price">$49.99</h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div id="product-3" className="single-product">
                <div className="part-1">
                  <ul>
                    <li>
                      {/* <a href="#">
                        <i className="fas fa-shopping-cart"></i>
                      </a> */}
                       <Link to="/">  <i className="fas fa-shopping-cart"></i></Link>
                    </li>
                    <li>
                      {/* <a href="#">
                        <i className="fas fa-heart"></i>
                      </a> */}
                         <Link to="/">    <i className="fas fa-heart"></i></Link>
                    </li>
                    <li>
                      {/* <a href="#">
                        <i className="fas fa-plus"></i>
                      </a> */}
                      <Link to="/">    <i className="fas fa-plus"></i></Link>
                    </li>
                  </ul>
                </div>
                <div className="part-2">
                  <h3 className="product-title">Lamborghini sport car</h3>
                  <h4 className="product-old-price">$79.99</h4>
                  <h4 className="product-price">$49.99</h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div id="product-4" className="single-product">
                <div className="part-1">
                  <span className="new">new</span>
                  <ul>
                    <li>
                      {/* <a href="#">
                        <i className="fas fa-shopping-cart"></i>
                      </a> */}
                      <Link to="/">     <i className="fas fa-shopping-cart"></i></Link>
                    </li>
                    <li>
                      {/* <a href="#">
                        <i className="fas fa-heart"></i>
                      </a> */}
                      <Link to="/">      <i className="fas fa-heart"></i></Link>
                    </li>
                    <li>
                      {/* <a href="#">
                        <i className="fas fa-plus"></i>
                      </a> */}
                         <Link to="/">     <i className="fas fa-plus"></i></Link>
                    </li>
                  </ul>
                </div>
                <div className="part-2">
                  <h3 className="product-title">Lamborghini sport car</h3>
                  <h4 className="product-price">$49.99</h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div id="product-1" className="single-product">
                <div className="part-1">
                  <ul>
                    <li>
                      {/* <a href="#">
                        <i className="fas fa-shopping-cart"></i>
                      </a> */}
                        <Link to="/">     <i className="fas fa-shopping-cart"></i></Link>
                    </li>
                    <li>
                      {/* <a href="#">
                        <i className="fas fa-heart"></i>
                      </a> */}
                        <Link to="/">      <i className="fas fa-heart"></i></Link>
                    </li>
                    <li>
                      {/* <a href="#">
                        <i className="fas fa-plus"></i>
                      </a> */}
                       <Link to="/">     <i className="fas fa-plus"></i></Link>
                    </li>
                  </ul>
                </div>
                <div className="part-2">
                  <h3 className="product-title">Lamborghini sport car</h3>
                  <h4 className="product-old-price">$79.99</h4>
                  <h4 className="product-price">$49.99</h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div id="product-2" className="single-product">
                <div className="part-1">
                  <span className="discount">15% off</span>
                  <ul>
                    <li>
                      {/* <a href="#">
                        <i className="fas fa-shopping-cart"></i>
                      </a> */}
                        <Link to="/">     <i className="fas fa-shopping-cart"></i></Link>
                    </li>
                    <li>
                      {/* <a href="#">
                        <i className="fas fa-heart"></i>
                      </a> */}
                        <Link to="/">      <i className="fas fa-heart"></i></Link>
                    </li>
                    <li>
                      {/* <a href="#">
                        <i className="fas fa-plus"></i>
                      </a> */}
                       <Link to="/">     <i className="fas fa-plus"></i></Link>
                    </li>
                  </ul>
                </div>
                <div className="part-2">
                  <h3 className="product-title">Lamborghini sport car</h3>
                  <h4 className="product-price">$49.99</h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div id="product-3" className="single-product">
                <div className="part-1">
                  <ul>
                    <li>
                      {/* <a href="#">
                        <i className="fas fa-shopping-cart"></i>
                      </a> */}
                      <Link to="/"> <i className="fas fa-shopping-cart"></i></Link>
                    </li>
                    <li>
                      {/* <a href="#">
                        <i className="fas fa-heart"></i>
                      </a> */}
                        <Link to="/">      <i className="fas fa-heart"></i></Link>
                    </li>
                    <li>
                      {/* <a href="#">
                        <i className="fas fa-plus"></i>
                      </a> */}
                       <Link to="/">     <i className="fas fa-plus"></i></Link>
                    </li>
                  </ul>
                </div>
                <div className="part-2">
                  <h3 className="product-title">Lamborghini sport car</h3>
                  <h4 className="product-old-price">$79.99</h4>
                  <h4 className="product-price">$49.99</h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div id="product-4" className="single-product">
                <div className="part-1">
                  <span className="new">new</span>
                  <ul>
                    <li>
                      {/* <a href="#">
                        <i className="fas fa-shopping-cart"></i>
                      </a> */}
                        <Link to="/">     <i className="fas fa-shopping-cart"></i></Link>
                    </li>
                    <li>
                      {/* <a href="#">
                        <i className="fas fa-heart"></i>
                      </a> */}
                        <Link to="/">      <i className="fas fa-heart"></i></Link>
                    </li>
                    <li>
                      {/* <a href="#">
                        <i className="fas fa-plus"></i>
                      </a> */}
                       <Link to="/">     <i className="fas fa-plus"></i></Link>
                    </li>
                  </ul>
                </div>
                <div className="part-2">
                  <h3 className="product-title">Lamborghini sport car</h3>
                  <h4 className="product-price">$49.99</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
