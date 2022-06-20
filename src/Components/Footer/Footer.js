import { Link } from "react-router-dom";
import "./Footer.css";

<head>
  <link
    href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
    rel="stylesheet"
    id="bootstrap-css"
  />
  <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
  />
</head>;
function Footer() {
  return (
    <footer id="dk-footer" className="dk-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-4">
            <div className="dk-footer-box-info">
              <Link
                to="https://www.lamborghini.com/en-en/models/urus"
                className="footer-logo"
              >
                <img
                  src="https://img4.goodfon.ru/wallpaper/nbig/c/c0/lamborghini-centenario-lp770-4.jpg"
                  alt="footer_logo"
                  className="img-fluid"
                />
              </Link>
              <p className="footer-info-text">
                Lamborghini Centenario is a mid-engined four-wheel drive
                supercar produced in a limited edition of 40 copies in honor of
                the 100th
              </p>
              <div className="footer-social-link">
                <h3>Follow us</h3>
                <ul>
                  <li>
                    <Link to="/">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/174/174848.png"
                        alt="footer_logo"
                        width="30px"
                        height="30px"
                        className="send"
                      />
                    </Link>
                  </li>

                  <li>
                    <Link to="/">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                        alt="footer_logo"
                        width="30px"
                        height="30px"
                        className="send"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      {" "}
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                        alt="footer_logo"
                        width="30px"
                        height="30px"
                        className="send"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      {" "}
                      <img
                        src="https://cdn-icons.flaticon.com/png/512/3670/premium/3670127.png?token=exp=1653456463~hmac=0b0cd1601a2c745755bd18db73907fba"
                        alt="footer_logo"
                        width="33x"
                        height="33px"
                        className="send"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-awarad">
              <img src="images/icon/best.png" alt="" />
              <p>Best Design Company 2022</p>
            </div>
          </div>
          <div className="col-md-12 col-lg-8">
            <div className="row">
              <div className="col-md-6">
                <div className="contact-us">
                  <div className="contact-icon">
                    <img
                      src="https://cdn-icons.flaticon.com/png/512/1287/premium/1287955.png?token=exp=1653456577~hmac=18061085540f3762208b0daf1cf7ede4"
                      alt="footer_logo"
                      width="25px"
                      height="25px"
                      className="send"
                    />
                  </div>
                  <div className="contact-info">
                    <h3>Kyrgyzstan</h3>
                    <p>City: Karakol</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="contact-us contact-us-last">
                  <div className="contact-icon">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1782/1782802.png"
                      alt="footer_logo"
                      width="30px"
                      height="30px"
                      className="send"
                    />
                  </div>
                  <div className="contact-info">
                    <h3>+995 990171169</h3>
                    <p>Give us a call</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <div className="footer-widget footer-left-widget">
                  <div className="section-heading">
                    <h3>Useful Links</h3>
                    <span className="animate-border border-black"></span>
                  </div>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>

                    <li>
                      <Link to="/">About us</Link>
                    </li>
                    <li>
                      <Link to="/">Services</Link>
                    </li>
                    <li>
                      <Link to="/">Projects</Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Link to="/">Contacts</Link>
                    </li>
                    <li>
                      <Link to="/">Blog</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-12 col-lg-6">
                <div className="footer-widget">
                  <div className="section-heading">
                    <h3>Subscribe</h3>
                    <span className="animate-border border-black"></span>
                  </div>
                  <p className="footer-info-text">
                    {" "}
                    Reference site about Lorem Ipsum, giving information on its
                    origins, as well.
                  </p>
                  <form action="#">
                    <div className="form-row">
                      <div className="col dk-footer-form">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                        />
                        <button className="seb" type="submit">
                          {/* <i className="fa fa-send"></b> */}
                          <img
                            src="http://cdn.onlinewebfonts.com/svg/img_446833.png"
                            alt="footer_logo"
                            width="20px"
                            height="20px"
                            className="send"
                          />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <span>Copyright © 2022, All Right Reserved Lamborghini</span>
            </div>
          </div>
        </div>
      </div>

      <div id="back-to-top" className="back-to-top">
        {/* <button className="btn btn-dark" title="Back to Top" style="display: block;">
          <i className="fa fa-angle-up"></b>
        </button> */}
      </div>
    </footer>
  );
}

export default Footer;
