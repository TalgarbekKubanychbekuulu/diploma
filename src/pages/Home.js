import "./Pages.css";
import Headers from "../Components/Headers/Headers";
import headerImage from "../assets/headers03.jpg";
import CategoryList from "../Components/CategoryList/CategoryList";
import {getCategories} from "../data/categories"


function Home() {
  return (
    
    <>
    
      <Headers title="Welcome to  Sport cars Home!" image={headerImage}>
        A sports car or sports car is a conditionally generalized name for a
        wide class of two-, rarely four-seater cars,{" "}
      </Headers>

    <CategoryList categories={getCategories()} />

      <div className="text-aside">
        <p>
          Automobili Lamborghini S.p.A.is an Italian brand and manufacturer of luxury sports
          cars and SUVs based in Sant'Agata Bolognese. The company is owned by
          the Volkswagen Group through its subsidiary Audi.
        </p>

        <aside>
          <p>
            1963–1972 Ferruccio Lamborghini
            <br />
            1972–1977 Georges-Henri Rossetti and René Leimer
            <br />
            1977–1984 Receivership
            <br />
            1984–1987 Patrick Mimran
            <br />
            1987–1994 Chrysler Corporation
            <br />
            1994–1995 MegaTech
            <br />
            1995–1998 V'Power and Mycom Sedtco
            <br />
            1998–present Audi AG
          </p>
        </aside>

        <p>
       Ferruccio Lamborghini, an Italian manufacturing magnate, founded Automobili Ferruccio Lamborghini S.p.A. in 1963 to compete with Ferrari. The company was noted for using a rear mid-engine, rear-wheel drive layout. Lamborghini grew rapidly during its first decade, but sales plunged in the wake of the 1973 worldwide financial downturn and the oil crisis. The firm's ownership changed three times after 1973, including a bankruptcy in 1978. American Chrysler Corporation took control of Lamborghini in 1987 and sold it to Malaysian investment group Mycom Setdco and Indonesian group V'Power Corporation in 1994. In 1998, Mycom Setdco and V'Power sold Lamborghini to the Volkswagen Group where it was placed under the control of the group's Audi division.
        </p>
        
     
      <article>
  <header>
    <h2 className="lambo">Lamborghini</h2>
    <p>Lamborghini Trattori, founded in 1948 by Ferruccio Lamborghini, is headquartered in Pieve di Cento, Italy and continues to produce tractors.</p>
  </header>
  <p>Lamborghini currently produces the V12-powered Aventador and the V10-powered Huracán, along with the Urus SUV powered by a twin-turbo V8 engine. In addition, the company produces V12 engines for offshore powerboat racing.</p>
  <p><a href="https://en.wikipedia.org/wiki/Lamborghini">Continue reading...</a></p>
</article>
<header class="page-header">
    <h1>Automobiles!</h1>
</header>

<main>
  {/* <h4>Automobiles</h4> */}
    <p>As of the 2018 model year, Lamborghini's automobile product range consists of three model lines, two of which are mid-engine two-seat sports cars while the third one is a front engined, all-wheel drive SUV.[6]</p>
    <p>Main article:<a href="https://en.wikipedia.org/wiki/Lamborghini_Aventador">https://en.wikipedia.org/wiki/Lamborghini_Aventador</a></p>
</main>
<video width="400" height="320" controls="controls" autoplay>
   {/* <source src="video/cars.mp4" type='video/cars; codecs="theora, vorbis"' /> */}
   <source src="cars.mp4" type="video/mp4" />
   {/* <source src="video/cars.webm" type='video/cars; codecs="vp8, vorbis"' />
   Тег video не поддерживается вашим браузером. */}
  </video>
  
  

</div>
    </>
  );
}

export default Home;
