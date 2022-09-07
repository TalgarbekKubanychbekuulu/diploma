import kor from "../assets/korzina.png";
import logos from "../assets/logotip1.png";
import React from "react";
import "../Components/Css/General.css";

function Products2() {
  return (
    <article>
      <div className="Semaforo">
        <p class="info">
          <span>Super car</span>
          <strong>Lamborghini</strong>
          <button>+</button>
        </p>
      </div>

      <div className="Semaforo">
        <p class="info">
          <span>Aventador</span>
          <strong>Lamborghini</strong>
          <button>+</button>
        </p>
      </div>

      <div className="Semaforo">
        <p class="info">
          <span>Sián FKP 37 </span>
          <strong>Lamborghini</strong>
          <button>+</button>
        </p>
      </div>

      <div className="Semaforo">
        <p class="info">
          <span>Urus</span>
          <strong>Lamborghini</strong>
          <button>+</button>
        </p>
      </div>

      <div className="my-lambo">
        <h2>Adventador</h2>
        <p className="because-text">
          The Aventador has been created to anticipate the future, as
          demonstrated by the use of innovative technology, including a V12
          engine and the extensive use of carbon fiber. The authentic design
          masterpieces together stark dynamism with aggression to produce a
          cutting edge carbon fiber monocoque. The interior of the Aventador
          combines high-level technology and luxury equipment with
          premium-quality materials, skilfully crafted with the expertise
          characteristic of the finest Italian traditions. A supercar family
          that has already become a legend in its own right. Discover technical
          specifications, dimensions, performance, and the detailed features of
          all the new Lamborghini Aventador models.
        </p>
        <h2> Sián FKP 37</h2>
        <p className="because-text">
          Sián FKP 37 is the sudden lightning that marks a real historical
          change. Sián FKP 37, which means lightning bolt in Bolognese dialect,
          is the name of the first Lamborghini hybrid production car: a
          masterpiece of technology and innovation with an extraordinary
          hyper-car design. Produced in just 63 units, the new few-off amplifies
          the emotions of the most powerful naturally aspirated V12 ever
          produced by Lamborghini, thanks to the boost of the first electric
          motor in the world powered by supercapacitors.
        </p>
        <h2>Urus</h2>
        <p className="because-text">
          Lamborghini Urus is the world’s first Super Sport Utility Vehicle, in
          which luxury, sportiness and performance meet comfort and versatility.
          It offers best-in-class driving dynamics, alongside its unmistakable
          elegance of design. Urus embodies the characteristics of multiple
          souls: sporty, elegant and off-road, and has a suitability for
          everyday driving in a range of environments. With its surprisingly
          distinct engine sound, combined with high performance, Lamborghini
          Urus is anything but typical.
        </p>
      </div>
      <div className="cards">
        <div class="wrapper">
          <div class="desc">
            <h1 className="text_description23">
              <img src={logos} alt="" className="logotip2"/>
              Lamborghini clothing products for you
            </h1>
            <p className="right-text22">
              Lamborghini together towards the future...
            </p>
          </div>

          <div class="content">
            <div class="product-grid product-grid--flexbox">
              <div class="product-grid__wrapper">
                <div class="product-grid__product-wrapper">
                  <div class="product-grid__product">
                    <div class="product-grid__img-wrapper">
                      <img
                        src="http://img.alicdn.com/imgextra/i1/2019169261/T23L7.XoJaXXXXXXXX-2019169261.jpg"
                        alt="Img"
                        class="product-grid__img"
                      />
                    </div>
                    <span class="product-grid__title">Jacket</span>
                    <span class="product-grid__price">1.399$</span>
                    <div class="product-grid__extend-wrapper">
                      <div class="product-grid__extend">
                        <p class="product-grid__description">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Perferendis velit itaque odit.
                        </p>
                        <span class="product-grid__btn product-grid__add-to-cart">
                          <img src={kor} alt="" className="koro" /> Add to cart
                        </span>
                        <span class="product-grid__btn product-grid__view">
                          View more
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="product-grid__product-wrapper">
                  <div class="product-grid__product">
                    <div class="product-grid__img-wrapper">
                      <img
                        src="https://assets2.mr-mag.com/wp-content/uploads/2018/02/LAMBORGHINI_02062018_SFZ_080-1024x684.jpeg"
                        alt="Img"
                        class="product-grid__img"
                      />
                    </div>
                    <span class="product-grid__title">Blazer</span>
                    <span class="product-grid__price">1.399$</span>
                    <div class="product-grid__extend-wrapper">
                      <div class="product-grid__extend">
                        <p class="product-grid__description">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Perferendis velit itaque odit.
                        </p>
                        <span class="product-grid__btn product-grid__add-to-cart">
                          <img src={kor} alt="" className="koro" /> Add to cart
                        </span>
                        <span class="product-grid__btn product-grid__view">
                          View more
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="product-grid__product-wrapper">
                  <div class="product-grid__product">
                    <div class="product-grid__img-wrapper">
                      <img
                        src="https://vse.kz/uploads/monthly_12_2014/post-443204-0-35013600-1418753735.jpg"
                        alt="Img"
                        class="product-grid__img"
                      />
                    </div>
                    <span class="product-grid__title">Red Jacket</span>
                    <span class="product-grid__price">1.399$</span>
                    <div class="product-grid__extend-wrapper">
                      <div class="product-grid__extend">
                        <p class="product-grid__description">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Perferendis velit itaque odit.
                        </p>
                        <span class="product-grid__btn product-grid__add-to-cart">
                          <img src={kor} alt="" className="koro" /> Add to cart
                        </span>
                        <span class="product-grid__btn product-grid__view">
                          View more
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="product-grid__product-wrapper">
                  <div class="product-grid__product">
                    <div class="product-grid__img-wrapper">
                      <img
                        src="https://img.printfact.ru/image/big/women/lamborghini/tolstovki-lamborghini-huracan-766d065.jpg"
                        alt="Img"
                        class="product-grid__img"
                      />
                    </div>
                    <span class="product-grid__title">T-shirt</span>
                    <span class="product-grid__price">1.399$</span>
                    <div class="product-grid__extend-wrapper">
                      <div class="product-grid__extend">
                        <p class="product-grid__description">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Perferendis velit itaque odit.
                        </p>
                        <span class="product-grid__btn product-grid__add-to-cart">
                          <img src={kor} alt="" className="koro" /> Add to cart
                        </span>
                        <span class="product-grid__btn product-grid__view">
                          View more
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="product-grid__product-wrapper">
                  <div class="product-grid__product">
                    <div class="product-grid__img-wrapper">
                      <img
                        src="https://i.pinimg.com/originals/2f/6b/47/2f6b478618b643d6259299e5d2eb84e2.jpg"
                        alt="Img"
                        class="product-grid__img"
                      />
                    </div>
                    <span class="product-grid__title">Sport black T-shirt</span>
                    <span class="product-grid__price">1.399$</span>
                    <div class="product-grid__extend-wrapper">
                      <div class="product-grid__extend">
                        <p class="product-grid__description">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Perferendis velit itaque odit.
                        </p>
                        <span class="product-grid__btn product-grid__add-to-cart">
                          <img src={kor} alt="" className="koro" /> Add to cart
                        </span>
                        <span class="product-grid__btn product-grid__view">
                          View more
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="product-grid__product-wrapper">
                  <div class="product-grid__product">
                    <div class="product-grid__img-wrapper">
                      <img
                        src="https://sc03.alicdn.com/kf/HTB1so6jQFXXXXbbXVXXq6xXFXXX7/Latest-Louis-Fashion-font-b-Lamborghini-b-font-font-b-Logo-b-font-In-Gold-on.jpg"
                        alt="Img"
                        class="product-grid__img"
                      />
                    </div>
                    <span class="product-grid__title">Black T-shirt</span>
                    <span class="product-grid__price">1.399$</span>
                    <div class="product-grid__extend-wrapper">
                      <div class="product-grid__extend">
                        <p class="product-grid__description">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Perferendis velit itaque odit.
                        </p>
                        <span class="product-grid__btn product-grid__add-to-cart">
                          <img src={kor} alt="" className="koro" /> Add to cart
                        </span>
                        <span class="product-grid__btn product-grid__view">
                          View more
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="product-grid__product-wrapper">
                  <div class="product-grid__product">
                    <div class="product-grid__img-wrapper">
                      <img
                        src="https://images.wbstatic.net/big/new/73390000/73393008-1.jpg"
                        alt="Img"
                        class="product-grid__img"
                      />
                    </div>
                    <span class="product-grid__title">Leather wallet</span>
                    <span class="product-grid__price">1.399$</span>
                    <div class="product-grid__extend-wrapper">
                      <div class="product-grid__extend">
                        <p class="product-grid__description">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Perferendis velit itaque odit.
                        </p>
                        <span class="product-grid__btn product-grid__add-to-cart">
                          <img src={kor} alt="" className="koro" /> Add to cart
                        </span>
                        <span class="product-grid__btn product-grid__view">
                          View more
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="product-grid__product-wrapper">
                  <div class="product-grid__product">
                    <div class="product-grid__img-wrapper">
                      <img
                        src="https://ae01.alicdn.com/kf/H5dfdb47ef6534ad093cda65465b97badr/Mannen-Vrouwen-Verstelbare-Lamborghini-Logo-Trucker-Dad-Baseball-Hoeden-Cap.jpg"
                        alt="Img"
                        class="product-grid__img"
                      />
                    </div>
                    <span class="product-grid__title">Black Сap</span>
                    <span class="product-grid__price">1.399$</span>
                    <div class="product-grid__extend-wrapper">
                      <div class="product-grid__extend">
                        <p class="product-grid__description">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Perferendis velit itaque odit.
                        </p>
                        <span class="product-grid__btn product-grid__add-to-cart">
                          <img src={kor} alt="" className="koro" /> Add to cart
                        </span>
                        <span class="product-grid__btn product-grid__view">
                          View more
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="product-grid__product-wrapper">
                  <div class="product-grid__product">
                    <div class="product-grid__img-wrapper">
                      <img
                        src="https://vse-footbolki.ru/image/catalog/vsm/0/1/1485/1485249/previews/people_301_luggage_cover_front_white_700.jpg"
                        alt="Img"
                        class="product-grid__img"
                      />
                    </div>
                    <span class="product-grid__title">Suitcase</span>
                    <span class="product-grid__price">1.399$</span>
                    <div class="product-grid__extend-wrapper">
                      <div class="product-grid__extend">
                        <p class="product-grid__description">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Perferendis velit itaque odit.
                        </p>
                        <span class="product-grid__btn product-grid__add-to-cart">
                          <img src={kor} alt="" className="koro" /> Add to cart
                        </span>
                        <span class="product-grid__btn product-grid__view">
                          View more
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Products2;
