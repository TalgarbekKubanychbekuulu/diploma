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

      <section class="section-products">
        <div class="container">
          <div class="row justify-content-center text-center">
            <div class="col-md-8 col-lg-6">
              <div class="header">
                <h3>Featured Product</h3>
                <h2 className="pop">Popular Products</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-1" class="single-product">
                <div class="part-1">
                  <ul>
                    <li>
                      <a href="/">
                        <i class="fas fa-shopping-cart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i class="fas fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i class="fas fa-plus"></i>
                      </a>
                      
                    </li>
                  </ul>
                </div>
                <div class="part-2">
                  <h3 class="product-title">Lamborghini sport car</h3>
                  <h4 class="product-old-price">$79.99</h4>
                  <h4 class="product-price">$49.99</h4>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-2" class="single-product">
                <div class="part-1">
                  <span class="discount">15% off</span>
                  <ul>
                    <li>
                      {/* <a href="#">
                        {" "}
                        <i class="fas fa-shopping-cart"></i>
                      </a> */}
                      <Link to="/">  <i class="fas fa-shopping-cart"></i></Link>

                    </li>
                    <li>
                      {/* <a href="#">
                        {" "}
                        <i class="fas fa-heart"></i>
                      </a> */}
                         <Link to="/"> <i class="fas fa-heart"></i></Link>
                    </li>
                    <li>
                      {/* <a href="#">
                        {" "}
                        <i class="fas fa-plus"></i>
                      </a> */}
                      <Link to="/"> <i class="fas fa-plus"></i></Link>
                    </li>
                  </ul>
                </div>
                <div class="part-2">
                  <h3 class="product-title">Lamborghini sport car</h3>
                  <h4 class="product-price">$49.99</h4>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-3" class="single-product">
                <div class="part-1">
                  <ul>
                    <li>
                      {/* <a href="#">
                        <i class="fas fa-shopping-cart"></i>
                      </a> */}
                       <Link to="/">  <i class="fas fa-shopping-cart"></i></Link>
                    </li>
                    <li>
                      {/* <a href="#">
                        <i class="fas fa-heart"></i>
                      </a> */}
                         <Link to="/">    <i class="fas fa-heart"></i></Link>
                    </li>
                    <li>
                      {/* <a href="#">
                        <i class="fas fa-plus"></i>
                      </a> */}
                      <Link to="/">    <i class="fas fa-plus"></i></Link>
                    </li>
                  </ul>
                </div>
                <div class="part-2">
                  <h3 class="product-title">Lamborghini sport car</h3>
                  <h4 class="product-old-price">$79.99</h4>
                  <h4 class="product-price">$49.99</h4>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-4" class="single-product">
                <div class="part-1">
                  <span class="new">new</span>
                  <ul>
                    <li>
                      {/* <a href="#">
                        <i class="fas fa-shopping-cart"></i>
                      </a> */}
                      <Link to="/">     <i class="fas fa-shopping-cart"></i></Link>
                    </li>
                    <li>
                      {/* <a href="#">
                        <i class="fas fa-heart"></i>
                      </a> */}
                      <Link to="/">      <i class="fas fa-heart"></i></Link>
                    </li>
                    <li>
                      {/* <a href="#">
                        <i class="fas fa-plus"></i>
                      </a> */}
                         <Link to="/">     <i class="fas fa-plus"></i></Link>
                    </li>
                  </ul>
                </div>
                <div class="part-2">
                  <h3 class="product-title">Lamborghini sport car</h3>
                  <h4 class="product-price">$49.99</h4>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-1" class="single-product">
                <div class="part-1">
                  <ul>
                    <li>
                      {/* <a href="#">
                        <i class="fas fa-shopping-cart"></i>
                      </a> */}
                        <Link to="/">     <i class="fas fa-shopping-cart"></i></Link>
                    </li>
                    <li>
                      {/* <a href="#">
                        <i class="fas fa-heart"></i>
                      </a> */}
                        <Link to="/">      <i class="fas fa-heart"></i></Link>
                    </li>
                    <li>
                      {/* <a href="#">
                        <i class="fas fa-plus"></i>
                      </a> */}
                       <Link to="/">     <i class="fas fa-plus"></i></Link>
                    </li>
                  </ul>
                </div>
                <div class="part-2">
                  <h3 class="product-title">Lamborghini sport car</h3>
                  <h4 class="product-old-price">$79.99</h4>
                  <h4 class="product-price">$49.99</h4>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-2" class="single-product">
                <div class="part-1">
                  <span class="discount">15% off</span>
                  <ul>
                    <li>
                      {/* <a href="#">
                        <i class="fas fa-shopping-cart"></i>
                      </a> */}
                        <Link to="/">     <i class="fas fa-shopping-cart"></i></Link>
                    </li>
                    <li>
                      {/* <a href="#">
                        <i class="fas fa-heart"></i>
                      </a> */}
                        <Link to="/">      <i class="fas fa-heart"></i></Link>
                    </li>
                    <li>
                      {/* <a href="#">
                        <i class="fas fa-plus"></i>
                      </a> */}
                       <Link to="/">     <i class="fas fa-plus"></i></Link>
                    </li>
                  </ul>
                </div>
                <div class="part-2">
                  <h3 class="product-title">Lamborghini sport car</h3>
                  <h4 class="product-price">$49.99</h4>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-3" class="single-product">
                <div class="part-1">
                  <ul>
                    <li>
                      {/* <a href="#">
                        <i class="fas fa-shopping-cart"></i>
                      </a> */}
                      <Link to="/"> <i class="fas fa-shopping-cart"></i></Link>
                    </li>
                    <li>
                      {/* <a href="#">
                        <i class="fas fa-heart"></i>
                      </a> */}
                        <Link to="/">      <i class="fas fa-heart"></i></Link>
                    </li>
                    <li>
                      {/* <a href="#">
                        <i class="fas fa-plus"></i>
                      </a> */}
                       <Link to="/">     <i class="fas fa-plus"></i></Link>
                    </li>
                  </ul>
                </div>
                <div class="part-2">
                  <h3 class="product-title">Lamborghini sport car</h3>
                  <h4 class="product-old-price">$79.99</h4>
                  <h4 class="product-price">$49.99</h4>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-4" class="single-product">
                <div class="part-1">
                  <span class="new">new</span>
                  <ul>
                    <li>
                      {/* <a href="#">
                        <i class="fas fa-shopping-cart"></i>
                      </a> */}
                        <Link to="/">     <i class="fas fa-shopping-cart"></i></Link>
                    </li>
                    <li>
                      {/* <a href="#">
                        <i class="fas fa-heart"></i>
                      </a> */}
                        <Link to="/">      <i class="fas fa-heart"></i></Link>
                    </li>
                    <li>
                      {/* <a href="#">
                        <i class="fas fa-plus"></i>
                      </a> */}
                       <Link to="/">     <i class="fas fa-plus"></i></Link>
                    </li>
                  </ul>
                </div>
                <div class="part-2">
                  <h3 class="product-title">Lamborghini sport car</h3>
                  <h4 class="product-price">$49.99</h4>
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
