
import "./Footer.css";


<head>
  <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
  <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
  
</head>
function Footer() {
  return (


    <footer id="dk-footer" class="dk-footer">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-4">
            <div class="dk-footer-box-info">
              <a href="index.html" class="footer-logo">
                <img src="https://img4.goodfon.ru/wallpaper/nbig/c/c0/lamborghini-centenario-lp770-4.jpg" alt="footer_logo" class="img-fluid" />
              </a>
              <p class="footer-info-text">
              Lamborghini Centenario is a mid-engined four-wheel drive supercar produced in a limited edition of 40 copies in honor of the 100th 
              </p>
              <div class="footer-social-link">
                <h3>Follow us</h3>
                <ul>
                  <li>
                    <a href="#">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  
                  <li>
                    <a href="#">
                      <i class="fa fa-google-plus"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="footer-awarad">
              <img src="images/icon/best.png" alt="" />
              <p>Best Design Company 2022</p>
            </div>
          </div>
          <div class="col-md-12 col-lg-8">
            <div class="row">
              <div class="col-md-6">
                <div class="contact-us">
                  <div class="contact-icon">
                    <i class="fa fa-map-o" aria-hidden="true"></i>
                  </div>
                  <div class="contact-info">
                    <h3>Kyrgyzstan</h3>
                    <p>City: Karakol</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="contact-us contact-us-last">
                  <div class="contact-icon">
                    <i class="fa fa-volume-control-phone" aria-hidden="true"></i>
                  </div>
                  <div class="contact-info">
                    <h3>+995 990171169</h3>
                    <p>Give us a call</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 col-lg-6">
                <div class="footer-widget footer-left-widget">
                  <div class="section-heading">
                    <h3>Useful Links</h3>
                    <span class="animate-border border-black"></span>
                  </div>
                  <ul>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Projects</a>
                    </li>
                    <li>
                      <a href="#">Our Team</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Testimonials</a>
                    </li>
                    <li>
                      <a href="#">Faq</a>
                    </li>
                  </ul>
                </div>

              </div>

              <div class="col-md-12 col-lg-6">
                <div class="footer-widget">
                  <div class="section-heading">
                    <h3>Subscribe</h3>
                    <span class="animate-border border-black"></span>
                  </div>
                  <p className="footer-info-text"> Reference site about Lorem Ipsum, giving information on its origins, as well.</p>
                  <form action="#">
                    <div class="form-row">
                      <div class="col dk-footer-form">
                        <input type="email" class="form-control" placeholder="Email Address" />
                        <button type="submit">
                          <i class="fa fa-send"></i>
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



      <div class="copyright">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <span>Copyright © 2022, All Right Reserved Lamborghini</span>
            </div>

            <div class="col-md-6">
              <div class="copyright-menu">
                <ul>
                  <li>
                    <a href="#">Home
                    </a>
                  </li>
                  <li>
                    <a href="#">Terms
                    </a>
                  </li>
                 
                  <li>
                    <a href="#"> Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          </div>

        </div>

      </div>

      <div id="back-to-top" class="back-to-top">
        {/* <button class="btn btn-dark" title="Back to Top" style="display: block;">
          <i class="fa fa-angle-up"></i>
        </button> */}
      </div>
    </footer>

  );
}

export default Footer;
