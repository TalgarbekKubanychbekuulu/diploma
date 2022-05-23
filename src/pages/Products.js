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
                  <label class="like">
  <input type="checkbox"/>
  <div class="hearth"/>
</label>
                    <li>
                    <Link to="/">
                        {" "}
                        <img
                          src="https://e7.pngegg.com/pngimages/306/475/png-clipart-computer-icons-shopping-cart-retail-shopping-cart-angle-text.png"
                          alt="footer_logo"
                          width="25px"
                          height="25px"
                        />
                      </Link>



                    </li>
                    <li>
                      {/* <a href="#">
                        <i className="fas fa-plus"></i>
                      </a> */}
                      <Link to="/About">
                        {" "}
                        <img
                          src="https://img2.freepng.ru/20180524/psv/kisspng-logo-information-computer-icons-5b07018351a692.5514889515271857953345.jpg"
                          alt="footer_logo"
                          width="25px"
                          height="25px"
                          className="heart"
                        />
                      </Link>
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
                  <label class="like">
  <input type="checkbox"/>
  <div class="hearth"/>
</label>
                    <li>
                      {/* <a href="#">
                        <i className="fas fa-heart"></i>
                      </a> */}
                       <Link to="/">
                        {" "}
                        <img
                          src="https://e7.pngegg.com/pngimages/306/475/png-clipart-computer-icons-shopping-cart-retail-shopping-cart-angle-text.png"
                          alt="footer_logo"
                          width="25px"
                          height="25px"
                        />
                      </Link>
                    </li>
                    <li>
                      {/* <a href="#">
                        <i className="fas fa-plus"></i>
                      </a> */}
                      <Link to="/">
                        {" "}
                        <img
                          src="https://img2.freepng.ru/20180524/psv/kisspng-logo-information-computer-icons-5b07018351a692.5514889515271857953345.jpg"
                          alt="footer_logo"
                          width="25px"
                          height="25px"
                        />
                      </Link>
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
                  <label class="like">
  <input type="checkbox"/>
  <div class="hearth"/>
</label>
                    <li>
                      {/* <a href="#">
                        <i className="fas fa-heart"></i>
                      </a> */}
                        <Link to="/">
                        {" "}
                        <img
                          src="https://e7.pngegg.com/pngimages/306/475/png-clipart-computer-icons-shopping-cart-retail-shopping-cart-angle-text.png"
                          alt="footer_logo"
                          width="25px"
                          height="25px"
                        />
                      </Link>
                    </li>
                    <li>
                      {/* <a href="#">
                        <i className="fas fa-plus"></i>
                      </a> */}
                      <Link to="/About">
                        {" "}
                        <img
                          src="https://img2.freepng.ru/20180524/psv/kisspng-logo-information-computer-icons-5b07018351a692.5514889515271857953345.jpg"
                          alt="footer_logo"
                          width="25px"
                          height="25px"
                        />
                      </Link>
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
                  <label class="like">
  <input type="checkbox"/>
  <div class="hearth"/>
</label>
                    <li>
                      {/* <a href="#">
                        <i className="fas fa-heart"></i>
                      </a> */}
                       <Link to="/">
                        {" "}
                        <img
                          src="https://e7.pngegg.com/pngimages/306/475/png-clipart-computer-icons-shopping-cart-retail-shopping-cart-angle-text.png"
                          alt="footer_logo"
                          width="25px"
                          height="25px"
                        />
                      </Link>
                    </li>
                    <li>
                      {/* <a href="#">
                        <i className="fas fa-plus"></i>
                      </a> */}
                      <Link to="/About">
                        {" "}
                        <img
                          src="https://img2.freepng.ru/20180524/psv/kisspng-logo-information-computer-icons-5b07018351a692.5514889515271857953345.jpg"
                          alt="footer_logo"
                          width="25px"
                          height="25px"
                        />
                      </Link>
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
                  <label class="like">
  <input type="checkbox"/>
  <div class="hearth"/>
</label>
                    <li>
                      {/* <a href="#">
                        <i className="fas fa-heart"></i>
                      </a> */}
                       <Link to="/">
                        {" "}
                        <img
                          src="https://e7.pngegg.com/pngimages/306/475/png-clipart-computer-icons-shopping-cart-retail-shopping-cart-angle-text.png"
                          alt="footer_logo"
                          width="25px"
                          height="25px"
                        />
                      </Link>
                    </li>
                    <li>
                      {/* <a href="#">
                        <i className="fas fa-plus"></i>
                      </a> */}
                      <Link to="/About">
                        {" "}
                        <img
                          src="https://img2.freepng.ru/20180524/psv/kisspng-logo-information-computer-icons-5b07018351a692.5514889515271857953345.jpg"
                          alt="footer_logo"
                          width="25px"
                          height="25px"
                        />
                      </Link>
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
                  <label class="like">
  <input type="checkbox"/>
  <div class="hearth"/>
</label>
                    <li>
                      {/* <a href="#">
                        <i className="fas fa-heart"></i>
                      </a> */}
                       <Link to="/">
                        {" "}
                        <img
                          src="https://e7.pngegg.com/pngimages/306/475/png-clipart-computer-icons-shopping-cart-retail-shopping-cart-angle-text.png"
                          alt="footer_logo"
                          width="25px"
                          height="25px"
                        />
                      </Link>
                    </li>
                    <li>
                      {/* <a href="#">
                        <i className="fas fa-plus"></i>
                      </a> */}
                      <Link to="/About">
                        {" "}
                        <img
                          src="https://img2.freepng.ru/20180524/psv/kisspng-logo-information-computer-icons-5b07018351a692.5514889515271857953345.jpg"
                          alt="footer_logo"
                          width="25px"
                          height="25px"
                        />
                      </Link>
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
                  <label class="like">
  <input type="checkbox"/>
  <div class="hearth"/>
</label>
                    <li>
                      {/* <a href="#">
                        <i className="fas fa-heart"></i>
                      </a> */}
                        <Link to="/">
                        {" "}
                        <img
                          src="https://e7.pngegg.com/pngimages/306/475/png-clipart-computer-icons-shopping-cart-retail-shopping-cart-angle-text.png"
                          alt="footer_logo"
                          width="25px"
                          height="25px"
                        />
                      </Link>
                    </li>
                    <li>
                      {/* <a href="#">
                        <i className="fas fa-plus"></i>
                      </a> */}
                      <Link to="/About">
                        {" "}
                        <img
                          src="https://img2.freepng.ru/20180524/psv/kisspng-logo-information-computer-icons-5b07018351a692.5514889515271857953345.jpg"
                          alt="footer_logo"
                          width="25px"
                          height="25px"
                        />
                      </Link>
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
                  <label class="like">
  <input type="checkbox"/>
  <div class="hearth"/>
</label>
                    <li>
                      {/* <a href="#">
                        <i className="fas fa-heart"></i>
                      </a> */}
                        <Link to="/">
                        {" "}
                        <img
                          src="https://e7.pngegg.com/pngimages/306/475/png-clipart-computer-icons-shopping-cart-retail-shopping-cart-angle-text.png"
                          alt="footer_logo"
                          width="25px"
                          height="25px"
                        />
                      </Link>
                    </li>
                    <li>
                      {/* <a href="#">
                        <i className="fas fa-plus"></i>
                      </a> */}
                      <Link to="/About">
                        {" "}
                        <img
                          src="https://img2.freepng.ru/20180524/psv/kisspng-logo-information-computer-icons-5b07018351a692.5514889515271857953345.jpg"
                          alt="footer_logo"
                          width="25px"
                          height="25px"
                        />
                      </Link>
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
