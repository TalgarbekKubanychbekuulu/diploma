// import "./Footer.css";

// function Footer() {
//   return (
//     <footer className="Footer">
//       Hypercar market 2022-year!
//     </footer>
//   );
// }

// export default Footer;
import "./Footer.css";

import d1Icon from "../../assets/FooterImages/lam.jpg";

import icon1 from "../../assets/FooterImages/facebook4.png";
import icon2 from "../../assets/FooterImages/twitter4.png";
import icon3 from "../../assets/FooterImages/google3.png";
import icon4 from "../../assets/FooterImages/skype3.png";
import icon5 from "../../assets/FooterImages/linkedin4.png";

import d2icon1 from "../../assets/FooterImages/loaction2.gif";
import d2icon2 from "../../assets/FooterImages/phone2.gif";
import d2icon3 from "../../assets/FooterImages/phone.gif";
import d2icon4 from "../../assets/FooterImages/gmail2.gif";
import d2icon5 from "../../assets/FooterImages/github.gif";

// import arrowRight from "../../assets/FooterImages/arrow-right.svg";

// import d3icon from "../../assets/FooterImages/link.svg";

import d4icon from "../../assets/FooterImages/new.png";
// import image1 from "../../assets/FooterImages/1.png";
// import image2 from "../../assets/FooterImages/2.jpg";
// import image3 from "../../assets/FooterImages/3.jpg";
// import image4 from "../../assets/FooterImages/4.webp";
// import image5 from "../../assets/FooterImages/5.jpg";
// import image6 from "../../assets/FooterImages/6.jpg";
import cars from "../../assets/car2.jpg"

import clic from "../../assets/FooterImages/coloc.gif";

function Footer() {
  return (
    <footer>
      <div className="mainFooter d-flex align-center justify-between p-20">
        <div className="w25p">
          <h2 className="d-flex align-center">
            <img
              className="icon01"
              src={d1Icon}
              alt="/"
              style={{ width: "30px" }}
            />
            Inter-Car
          </h2>
          <br />
          <p className="text-footer">
            Other popular Lamborghini models are the Espada (more than a
            thousand units sold)
          </p>
          <br />

          <p className="mb-11">
            <b>Connect With Us</b>
            <img
              className="mb-10"
              width="25px"
              height="25px"
              src={clic}
              alt="/"
            />
          </p>
          <div className="d1-icons">
            <div className="d-flex align-center socialNet">
              
              <img className="margin" src={icon1}  width="15px" height="26px" alt="/" />
              <img className="margin1" src={icon2} width="15px" height="26px" alt="/" />
              <img className="margin1" src={icon3} width="15px" height="26px" alt="/" />
              <img className="margin1" src={icon4} width="15px" height="26px" alt="/" />
              <img className="margin1" src={icon5} width="15px" height="26px" alt="/" />
            </div>
          </div>
        </div>

        {/* <div className="w25p block-3">
                    <div className="d-flex align-center justify-center">
                        <img src={d3icon} alt='/' style={{width: '30px'}}/>
                        <h2 className="ml-10">Links</h2>
                
                    </div>
                    <p><span>BLOG</span><span><img src={arrowRight} alt="/"/></span></p>
                    <p><span>PORTFOLIO</span><span><img src={arrowRight} alt="/"/></span></p>
                    <p><span>HOME</span><span><img src={arrowRight} alt="/"/></span></p>
                    <p><span>ABOUT</span><span><img src={arrowRight} alt="/"/></span></p>
                    <p><span>CONTACT</span><span><img src={arrowRight} alt="/"/></span></p>
                </div> */}
        <div className="step">
          <b className="buying"> Buying & Selling</b>
          <br />
          Find a Car
          <br />
          Find a Dealer
          <br />
          Listings by City
          <br />
          Certified Pre-Owned
          <br />
          Car Payment Calculators
          <br />
          Car Reviews & Ratings
          <br />
          Compare Side-by-side
          <br />
          Fraud Awareness
          <br />
          Sell Your Car
        </div>
        <div className="step">
          <b className="buying"> Our Company</b>
          <br />
          About Cars.com
          <br />
          Contact Cars.com
          <br />
          Investor Relations
          <br />
          Careers
          <br />
          Licensing & Reprints
          <br />
          Site Map
          <br />
          Feedback
        </div>

        <div className="w25p block-4">
          <div className="d-flex align-center justify-center">
            <img className="new" src={d4icon} alt="/" style={{ width: "35px" }} />
            <h2 className="ml-10">New cars</h2>
          </div>
          <br />
          <div className="images">
            <div className="text-center">
              <img src={cars} alt="/" className="img-1" />
              <img src={cars} alt="/" className="img-5" />
              {/* <img src={image3} alt="/" className="img-3" /> */}
            </div>
            <div className="text-center">
              <img src={cars} alt="/" className="img-4" />
              <img src={cars} alt="/" className="img-2" />
            </div>
          </div>
        </div>
        <div className="w25p block-2">
          <div></div>
          <p>
            <img className="loca" src={d2icon1} alt="/" />
            Kyrgystan <br /> City:Karakol Street:Shapak Baatyr 258
          </p>
          <p>
            <img className="loca" src={d2icon2} alt="/" />
            0990 171 169
          </p>
          <p>
            <img className="loca" src={d2icon3} alt="/" />
            00 999 999 101
          </p>
          <p>
            <img className="loca" src={d2icon4} alt="/" />
            Sport_Cars@gmail.com
          </p>
          <p>
            <img className="loca" src={d2icon5} alt="/" />
            Inter_Car@gmail.com
          </p>
        </div>
      </div>
      <hr />
      <div className="underMainFooter d-flex justify-between p-20">
        <div>
          <a className="footer-end" href="/" style={{ color: "lightgray" }}>
            ♛2022 Sport cars{" "}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
