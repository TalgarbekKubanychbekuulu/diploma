import "./products2.css";
import { Link } from "react-router-dom";

function Products2() {
  return (
    <>
      <div class="tab_container">
        <input id="tab1" type="radio" name="tabs" checked />
        <label for="tab1">
          <span>Code</span>
        </label>

        <input id="tab2" type="radio" name="tabs" />
        <label for="tab2">
          <span>About</span>
        </label>

        <input id="tab3" type="radio" name="tabs" />
        <label for="tab3">
          <span>Services</span>
        </label>

        <input id="tab4" type="radio" name="tabs" />
        <label for="tab4">
          <span>Portfolio</span>
        </label>

        <input id="tab5" type="radio" name="tabs" />
        <label for="tab5">
          <span>Contact</span>
        </label>

        <section id="content1" class="tab-content">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div id="product-1" className="single-product">
                  <div className="part-1">
                    <ul>
                      <label className="like">
                        <input type="checkbox" />
                        <div className="hearth" />
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
                    {/* <h4 className="product-old-price">$79.99</h4> */}
                    <h4 className="product-price">$49.099</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div id="product-2" className="single-product">
                  <div className="part-1">
                    <span className="discount">15% off</span>
                    <ul>
                      <label className="like">
                        <input type="checkbox" />
                        <div className="hearth" />
                      </label>
                      <li>
                        <Link to="/Buy">
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
                      <label className="like">
                        <input type="checkbox" />
                        <div className="hearth" />
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
                    {/* <h4 className="product-old-price">$79.99</h4> */}
                    <h4 className="product-price">$49.99</h4>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 col-xl-3">
                <div id="product-4" className="single-product">
                  <div className="part-1">
                    <span className="new">new</span>
                    <ul>
                      <label className="like">
                        <input type="checkbox" />
                        <div className="hearth" />
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
                    <h4 className="product-price">$49.990</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div id="product-1" className="single-product">
                  <div className="part-1">
                    <ul>
                      <label className="like">
                        <input type="checkbox" />
                        <div className="hearth" />
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
                    {/* <h4 className="product-old-price">$79.99</h4> */}
                    <h4 className="product-price">$49.99</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div id="product-2" className="single-product">
                  <div className="part-1">
                    <span className="discount">15% off</span>
                    <ul>
                      <label className="like">
                        <input type="checkbox" />
                        <div className="hearth" />
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
                      <label className="like">
                        <input type="checkbox" />
                        <div className="hearth" />
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
                    {/* <h4 className="product-old-price">$79.99</h4> */}
                    <h4 className="product-price">$49.99</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div id="product-4" className="single-product">
                  <div className="part-1">
                    <span className="new">new</span>
                    <ul>
                      <label className="like">
                        <input type="checkbox" />
                        <div className="hearth" />
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

        <section id="content2" class="tab-content">
          <h3>Headline 2</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>

        <section id="content3" class="tab-content">
          <h3>Headline 3</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>

        <section id="content4" class="tab-content">
          <h3>Headline 4</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </section>

        <section id="content5" class="tab-content">
          <h3>Headline 5</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
      </div>
    </>
  );
}

export default Products2;
