import "./Pages.css";
import "./Home.css";
import Headers from "../Components/Headers/Headers";
import headerImage from "../assets/headers03.jpg";
import { Link } from "react-router-dom";
// import CategoryList from "../Components/CategoryList/CategoryList";
// import {getCategories} from "../data/categories"

function Home() {
  
  return (
    <>
    <head>
    <link
      href="https://fonts.googleapis.com/css?family=Work+Sans:400,600,700&display=swap"
      rel="stylesheet"
    />
  </head>;
      <Headers title="< Contacts >" image={headerImage}></Headers>

      <h2 className="lambo">Lamborghini</h2>
      <p className="lambo">
        {" "}
        <code>Automobil</code> sport car. Italian company, manufacturer of
        expensive sports cars{" "}
      </p>

      <div className="layout">
        <input
          name="nav"
          type="radio"
          className="nav home-radio"
          id="home"
          checked="checked"
        />
        <div className="page home-page">
          <div className="page-contents">
            <h1 className="page1">Home</h1>
            <p>
              Automobili Lamborghini S.p.A. - Italian company, manufacturer of
              expensive sports cars under the Lamborghini brand. Located in the
              commune of Sant'Agata Bolognese, near Bologna. The company was
              founded in 1963 by Ferruccio Lamborghini, at that time he was
              already the founder of a large tractor manufacturing company.
              lambo super sport
            </p>
            {/* <img src="https://img4.goodfon.ru/wallpaper/nbig/c/c0/lamborghini-centenario-lp770-4.jpg" alt="footer_logo" className="img-fluid" /> */}

            <div id="main" className="is-loading">
              <h1 className="hei">
                Lamborghini <br /> 2022-Year
              </h1>
            </div>
            <p>
              <label for="about">Learn more</label>
            </p>
          </div>
        </div>
        <label className="nav" for="home">
          <span>
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="css-i6dzq1"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Home
          </span>
        </label>

        <input name="nav" type="radio" className="about-radio" id="about" />
        <div className="page about-page">
          <div className="page-contents">
            <h1 id="make" className="page1">About</h1>
            <p>
              Amet tt consectetur adipisicing elit. Sed ipsam ad exercitationem,
              quo quae ullam, quidem laudantium corporis quis minima debitis
              nesciunt repellat. Quos dolore ex quis voluptas, minus ut?
            </p>
            <div className="container">
              <h1 className="make">Models </h1>
            </div>
            <div id="exTab1" className="container">
              <ul className="nav nav-pills">
                <li className="active">
                  <Link to="#1a" data-toggle="tab">
                    Aventador
                  </Link>
                </li>
                <li>
                  <Link to="#2a" data-toggle="tab">
                    Huracán
                  </Link>
                </li>
                <li>
                  <Link to="#3a" data-toggle="tab">
                    Urus
                  </Link>
                </li>
                <li>
                  <Link to="#4a" data-toggle="tab">
                    Lamborghini Super Trofeo
                  </Link>
                </li>
              </ul>

              <div className="tab-content clearfix">
                <div className="tab-pane active" id="1a">
                  <h4>
                    <img
                      src="https://img4.goodfon.ru/wallpaper/nbig/c/c0/lamborghini-centenario-lp770-4.jpg"
                      alt="footer_logo"
                      className="img-fluid"
                      width="250px"
                      height="150px"
                    />
                    The current V12-powered Aventador production line consists
                    of the LP 740–4 Aventador Ultimate and SVJ coupés and
                    roadsters and it is said that the production of all
                    Aventador models will end in 2022.[7]
                  </h4>
                </div>
                <div className="tab-pane" id="2a">
                  <h4>
                    <img
                      src="https://i.pinimg.com/originals/d7/89/d3/d789d393bcab904592815da72bda7d54.jpg"
                      alt="footer_logo"
                      className="img-fluid"
                      width="250px"
                      height="150px"
                    />
                    The V10-powered Huracán line currently includes the
                    all-wheel-drive LP 610-4 coupé and Spyder, the low cost
                    rear-wheel-drive LP 580-2 coupé and Spyder and the most
                    powerful, track oriented LP 640-4 Performanté coupé and
                    Spyder.
                  </h4>
                </div>
                <div className="tab-pane" id="3a">
                  <h4>
                    <img
                      src="https://top-car.ru/upload/gallery/big/c25bc090d361a74f0715bb41fbd3333c.jpg"
                      alt="footer_logo"
                      className="img-fluid"
                      width="250px"
                      height="150px"
                    />
                    Main article: Lamborghini Urus Lamborghini Urus With the
                    intention of doubling its sales volume by 2019, Lamborghini
                    also added an SUV named Urus in its line-up which is powered
                    by a twin-turbo V8 engine and utilises a front engine,
                    all-wheel drive layout.
                  </h4>
                </div>
                <div className="tab-pane" id="4a">
                  <h4>
                    <img
                      src="https://faktom.ru/data/photo/072718_038600268466.jpg"
                      alt="footer_logo"
                      className="img-fluid"
                      width="250px"
                      height="150px"
                    />
                    The Super Trofeo is a series of Motorsport events held by
                    Squadra corse using their Super Trofeo model vehicles
                    (currently the Huracán Super Trofeo EVO) which are racing
                    versions of the road-approved models (Huracán and Gallardo
                    models).
                  </h4>
                </div>
              </div>
            </div>

            <hr></hr>
            <div className="container">
              <h2 className="make">History</h2>
            </div>

            <div id="exTab2" className="container">
              <ul className="nav nav-tabs">
                <li className="active">
                  <Link to="#1" data-toggle="tab">
                    Part1
                  </Link>
                </li>
                <li>
                  <Link to="#2" data-toggle="tab">
                    Part2
                  </Link>
                </li>
                <li>
                  <Link to="#3" data-toggle="tab">
                    Part3
                  </Link>
                </li>
              </ul>

              <div className="tab-content ">
                <div className="tab-pane active" id="1">
                  <h4>
                    Standard tab panel created on bootstrap using nav-tabsOn
                    April 28, 1916, Ferruccio Lamborghini, the founder of the
                    company that bears his name and is known for stylish,
                    high-performance cars, is born in Italy.
                  </h4>
                </div>
                <div className="tab-pane" id="2">
                  <h4>
                    After World War II, Lamborghini founded a business making
                    tractors from reconfigured surplus military machines, near
                    Bologna, Italy. He later expanded into other ventures,
                    including manufacturing air-conditioning and heating
                    systems, and grew rich. Lamborghini’s success enabled him to
                    purchase a variety of luxury sports cars, including a
                    Ferrari, considered one of the top cars of the time. After
                    experiencing mechanical difficulties with his Ferrari,
                    Lamborghini decided to start his own rival sports car
                    company, even hiring a former top Ferrari engineer.
                    Automobili Lamborghini was officially established in 1963 in
                    Sant’Agata Bolognese, Italy, and the same year debuted its
                    first car, the Lamborghini 350 GTV, a two-seater coupe with
                    a V12 engine.
                  </h4>
                </div>
                <div className="tab-pane" id="3">
                  <h4>
                    The company’s logo featured a bull, a reference to Ferruccio
                    Lamborghini’s zodiac sign, Taurus the bull. Various
                    Lamborghini models had names related to bulls or
                    bullfighting, including the Miura (named for Don Eduardo
                    Miura, a breeder of fighting bulls), a mid-engine sports car
                    that was released in mid-1960s and gained Lamborghini an
                    international following among car enthusiasts and a
                    reputation for prestige and cutting-edge design. In the
                    early 1970s, Lamborghini’s tractor business experienced
                    problems and he eventually sold his interest in his sports
                    car business and retired to his vineyard. Automobili
                    Lamborghini changed hands several times and in the late
                    1990s was purchased by German automaker Volkswagen. The
                    company continued to build high-performance cars, including
                    the Murcielago (capable of going over 200 mph) and the
                    Gallardo. Ferruccio Lamborghini died on February 20, 1993,
                    at the age of 76.
                  </h4>
                </div>
              </div>
            </div>

            <hr></hr>

            <div className="container">
              <h2 className="make">Car Maker </h2>
            </div>
            <div id="exTab3" className="container">
              <ul className="nav nav-pills">
                <li className="active">
                  <a href="#1b" data-toggle="tab">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#2b" data-toggle="tab">
                    Using nav-pills
                  </a>
                </li>
                <li>
                  <a href="#3b" data-toggle="tab">
                    Applying clearfix
                  </a>
                </li>
                <li>
                  <a href="#4a" data-toggle="tab">
                    Background color
                  </a>
                </li>
              </ul>

              <div className="tab-content clearfix">
                <div className="tab-pane active" id="1b">
                  <h4>
                    The company’s logo featured a bull, a reference to Ferruccio
                    Lamborghini’s zodiac sign, Taurus the bull. Various
                    Lamborghini models had names related to bulls or
                    bullfighting, including the Miura (named for Don Eduardo
                    Miura, a breeder of fighting bulls), a mid-engine sports car
                    that was released in mid-1960s and gained Lamborghini an
                    international following among car enthusiasts and a
                    reputation for prestige and cutting-edge design. In the
                    early 1970s, Lamborghini’s tractor business experienced
                    problems and he eventually sold his interest in his sports
                    car business and retired to his vineyard. Automobili
                    Lamborghini changed hands several times and in the late
                    1990s was purchased by German automaker Volkswagen. The
                    company continued to build high-performance cars, including
                    the Murcielago (capable of going over 200 mph) and the
                    Gallardo. Ferruccio Lamborghini died on February 20, 1993,
                    at the age of 76.
                  </h4>
                </div>
                <div className="tab-pane" id="2b">
                  <h4>
                    We use the class nav-pills instead of nav-tabs which
                    automatically creates a background color for the tab
                  </h4>
                </div>
                <div className="tab-pane" id="3b">
                  <h4>
                    We applied clearfix to the tab-content to rid of the gap
                    between the tab and the content
                  </h4>
                </div>
                <div className="tab-pane" id="4b">
                  <h4>
                    We use css to change the background color of the content to
                    be equal to the tab
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <label className="nav" for="about">
          <span>
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="css-i6dzq1"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <line x1="12" y1="17" x2="12" y2="17"></line>
            </svg>
            About
          </span>
        </label>

        <input name="nav" type="radio" className="contact-radio" id="contact" />
        <div className="page contact-page">
          <div className="page-contents">
            <h1 className="page1">Contact</h1>
            <p>
              Eaque accusamus magnam error unde nam, atque provident omnis
              fugiat quam necessitatibus vel nulla sed quibusdam fuga veritatis
              assumenda alias quidem asperiores?
            </p>
            <p>
              {/* <a href="#">
                Get in touch
                </a> */}
                <Link to="/">Get in touch</Link>
            </p>
          </div>
        </div>
        <label className="nav" for="contact">
          <span>
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="css-i6dzq1"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
           <Link to="/Contacts"> Contacts</Link>
          </span>
        </label>
      </div>
    </>
  );
}

export default Home;
