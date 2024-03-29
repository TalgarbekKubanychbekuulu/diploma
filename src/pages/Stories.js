// import "./Buy.css"

// import React from "react";
// import read from '@start/plugin-read'
// import babel from '@start/plugin-lib-babel'
// import write from '@start/plugin-write'

// function Store() {

//   const babelConfig = {
//     // …
//     babelrc: false,
//     sourceMap: true,
//   }

//   $(document).ready(function () {
//     // Product data to be used in shop and in cart
//     var products = {
//       "Lamborghini6": [
//         "Lamborghini6",
//         "The mug you've been dreaming about. One sip from this ceramic 16oz fluid delivery system and you'll never go back to red cups.",
//         142,
//         "https://www.autonews-mag.com/images/rolamburus4.jpg",
//         1
//       ],
//       " Lamborghini5": [
//         "  Essenza SCV12",
//         "These coasters roll all of the greatest qualities into one: class, leather, and octocats. They also happen to protect surfaces from cold drinks.",
//         999,
//         "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lamborghini-essenza-scv12-108-1596032758.jpg?crop=0.743xw:0.557xh;0.0977xw,0.210xh&amp;resize=1200:*",
//         2
//       ],
//       "Lamborghini4": [
//         "Huracan",
//         "Set of two heavyweight 16 oz. Octopint glasses for your favorite malty beverage.",
//         897,
//         "https://f7432d8eadcf865aa9d9-9c672a3a4ecaaacdf2fee3b3e6fd2716.ssl.cf3.rackcdn.com/C2299/U8577/IMG_39681-large.jpg",
//         3
//       ],
//       "Lamborghini3": [
//         "Adventador",
//         "Check it. Blacktocat is back with a whole new direction. He's exited stealth mode and is ready for primetime, now with a stylish logo.",
//         675,
//         "https://img2.cgtrader.com/items/92893/3eeb1021d6/lamborghini-aventador-lp700-3d-model-sldprt-sldasm-slddrw.jpg",
//         4
//       ],
//       "Lamborghini2": [
//         "Super Sport car",
//         "Need a huge Octocat sticker for your laptop, fridge, snowboard, or ceiling fan? Look no further!",
//         785,
//         "https://i.pinimg.com/originals/1a/66/0f/1a660f18432dcc8c16d5155830162b8b.jpg",
//         5
//       ],
//       "Lamborghini1": [
//         "Sian FKP 37",
//         "Pixels are your friends. Show your bits in this super-comfy blue American Apparel tri-blend shirt with a pixelated version of your favorite aquatic feline",
//         279,
//         "https://www.renderhub.com/squir/lamborghini-sian-roadster-2021/lamborghini-sian-roadster-2021-03.jpg",
//         6
//       ],
//       "Lamborghini-1": [
//         "Belt",
//         "The mug you've been dreaming about. One sip from this ceramic 16oz fluid delivery system and you'll never go back to red cups.",
//         142,
//         "http://watchy.ru/upload/shop_1/3/9/0/item_3904/shop_property_file_3904_24862.jpg",
//         1
//       ],
//       "Lamborghini-2": [
//         "Phone",
//         "The mug you've been dreaming about. One sip from this ceramic 16oz fluid delivery system and you'll never go back to red cups.",
//         142,
//         "http://toancauluxury.vn/image/data/Dien%20Thoai/Lamborghini/Tonino%20Lamborghini%20Alpha%20One%20Premium/Tonino-Lamborghini-Alpha-One-Premium-3.jpg",
//         1
//       ],
//       "Lamborghini-3": [
//         "Clock",
//         "The mug you've been dreaming about. One sip from this ceramic 16oz fluid delivery system and you'll never go back to red cups.",
//         142,
//         "http://content.onliner.by/forum/2e8/19e/701566/800x800/6a25fb71e43cabd150c797d50acf4a3a.jpg",
//         1
//       ],
//       "Lamborghini-3": [
//         "Trinket",
//         "The mug you've been dreaming about. One sip from this ceramic 16oz fluid delivery system and you'll never go back to red cups.",
//         142,
//         "https://auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0412/users/d6cea77d9db8f7d1b230d8e72f353df189b14ba7/i-img1200x800-1544594353ucjror1175846.jpg",
//         1
//       ],
//       "Lamborghini-3": [
//         "Steamer",
//         "The mug you've been dreaming about. One sip from this ceramic 16oz fluid delivery system and you'll never go back to red cups.",
//         142,
//         "https://amsrus.ru/wp-content/uploads/2020/07/Tecnomar-for-Lamborghini-63-5.jpg",
//         1
//       ],
//     };

//     // Populates shop with items based on template and data in var products

//     var $shop = $(".shop");
//     var $cart = $(".cart-items");

//     for (var item in products) {
//       var itemName = products[item][0],
//         itemDescription = products[item][1],
//         itemPrice = products[item][2],
//         itemImg = products[item][3],
//         itemId = products[item][4],
//         $template = $($("#productTemplate").html());

//       $template.find("h1").text(itemName);
//       $template.find("p").text(itemDescription);
//       $template.find(".price").text("K" + itemPrice);
//       $template.css("background-image", "url(" + itemImg + ")");

//       $template.data("id", itemId);
//       $template.data("name", itemName);
//       $template.data("price", itemPrice);
//       $template.data("image", itemImg);

//       $shop.append($template);
//     }

//     // Checks quantity of a cart item on input blur and updates components
//     // If quantity is zero, item is removed

//     $("body").on("blur", ".cart-items input", function () {
//       var $this = $(this),
//         $item = $this.parents("li");
//       if (+$this.val() === 0) {
//         $item.remove();
//       } else {
//         calculateSubcomponents($item);
//       }
//       updateCartQuantity();
//       calculateAndUpdate();
//     });

//     // Add item from the shop to the cart
//     // If item is already in the cart, +1 to quantity
//     // If not, creates the cart item based on template

//     $("body").on("click", ".product .add", function () {
//       var items = $cart.children(),
//         $item = $(this).parents(".product"),
//         $template = $($("#cartItem").html()),
//         $matched = null,
//         quantity = 0;

//       $matched = items.filter(function (index) {
//         var $this = $(this);
//         return $this.data("id") === $item.data("id");
//       });

//       if ($matched.length) {
//         quantity = +$matched.find(".quantity").val() + 1;
//         $matched.find(".quantity").val(quantity);
//         calculateSubcomponents($matched);
//       } else {
//         $template
//           .find(".cart-product")
//           .css("background-image", "url(" + $item.data("image") + ")");
//         $template.find("h3").text($item.data("name"));
//         $template.find(".subcomponents").text("KD" + $item.data("price"));

//         $template.data("id", $item.data("id"));
//         $template.data("price", $item.data("price"));
//         $template.data("subcomponents", $item.data("price"));

//         $cart.append($template);
//       }

//       updateCartQuantity();
//       calculateAndUpdate();
//     });

//     // Calculates subcomponents for an item

//     function calculateSubcomponents($item) {
//       var quantity = $item.find(".quantity").val(),
//         price = $item.data("price"),
//         subcomponents = quantity * price;
//       $item.find(".subcomponents").text("KD" + subcomponents);
//       $item.data("subcomponents", subcomponents);
//     }

//     // Clicking on the cart link opens up the shopping cart

//     var $cartlink = $(".cart-link"),
//       $wrap = $("#wrap");

//     $cartlink.on("click", function () {
//       $cartlink.toggleClass("active");
//       $wrap.toggleClass("active");
//       return false;
//     });

//     // Clicking outside the cart closes the cart, unless target is the "Add to Cart" button

//     $wrap.on("click", function (e) {
//       if (!$(e.target).is(".add")) {
//         $wrap.removeClass("active");
//         $cartlink.removeClass("active");
//       }
//     });

//     // Calculates and updates componentss, taxes, shipping

//     function calculateAndUpdate() {
//       var subcomponents = 0,
//         items = $cart.children(),
//         // shipping not applied if there are no items
//         shipping = items.length > 0 ? 5 : 0,
//         tax = 0;
//       items.each(function (index, item) {
//         var $item = $(item),
//           price = $item.data("subcomponents");
//         subcomponents += price;
//       });
//       $(".subcomponentscomponents span").text(formatDollar(subcomponents));
//       tax = subcomponents * 0.05;
//       $(".taxes span").text(formatDollar(tax));
//       $(".shipping span").text(formatDollar(shipping));
//       $(".finalcomponents span").text(formatDollar(subcomponents + tax + shipping));
//     }

//     //  Update the components quantity of items in notification, hides if zero

//     function updateCartQuantity() {
//       var quantities = 0,
//         $cartQuantity = $("span.cart-quantity"),
//         items = $cart.children();
//       items.each(function (index, item) {
//         var $item = $(item),
//           quantity = +$item.find(".quantity").val();
//         quantities += quantity;
//       });
//       if (quantities > 0) {
//         $cartQuantity.removeClass("empty");
//       } else {
//         $cartQuantity.addClass("empty");
//       }
//       $cartQuantity.text(quantities);
//     }

//     //  Formats number into dollar format

//     function formatDollar(amount) {
//       return "KD " + parseFloat(Math.round(amount * 100) / 100).toFixed(2);
//     }

//     // Restrict the quantity input field to numbers only

//     $("body").on("keypress", ".cart-items input", function (ev) {
//       var keyCode = window.event ? ev.keyCode : ev.which;
//       if (keyCode < 48 || keyCode > 57) {
//         if (keyCode != 0 && keyCode != 8 && keyCode != 13 && !ev.ctrlKey) {
//           ev.preventDefault();
//         }
//       }
//     });

//     $(".addtocart").on("click", function () {
//       $(this).addClass("active");
//       setTimeout(function () {
//         $(".addtocart").removeClass("active");
//       }, 1000);
//     });

//     $(".checkout").on("click", function () {
//       $(this).addClass("active");
//       $(".error").css("display", "block");
//       setTimeout(function () {
//         $(".checkout").removeClass("active");
//         $(".error").css("display", "none");
//       }, 1000);
//     });
//   });

//   return (

//     <>

//      <div id='cart'>
//   <h2>Your Shopping Cart</h2>
//   <ul class='cart-items'></ul>
//   <div class='components'>
//     <div class='subcomponentscomponents'>
//       Subcomponents
//       <span>KD0.00</span>
//     </div>
//     <div class='taxes'>
//       Tax
//       <span>KD0.00</span>
//     </div>
//     <div class='shipping'>
//       Shipping
//       <span>KD0.00</span>
//     </div>
//     <div class='finalcomponents'>
//       components
//       <span>KD0.00</span>
//     </div>
//     <a class='checkout'>
//       Check Out
//     </a>
//     <p class='error'></p>
//   </div>
// </div>
// <div class='wrap' id='wrap'>
//   <div className="boss">

//     <a class='cart-link' href='#menu'>
//       <span class='cart-text fontawesome-shopping-cart'>
//         <span >Cart</span>
//       </span>
//       {/* <span class='returnToShop'>&larr; Back</span> */}
//       <span class='cart-quantity empty'>0</span>
//     </a>
//   </div>
//   <section class='shop'></section>
//   <footer className="end-text">
//     <p>★Lamborghini together towards the future...</p>
//   </footer>
// </div>
// <script id='productTemplate' type='text/template'>
//   <div class="product">
//   <h1></h1>
//   <p></p>
//   <div class="button">
//   <div class="price"></div>
//   <a class="addtocart">
//   <div class="add">Add to Cart</div>
//   <div class="added">Added!</div>
//   </a>
//   </div>
//   </div>
// </script>
// <script id='cartItem' type='text/template'>
//   <li><div class="cart-product">
//   <input class="quantity" value="1"/>
//   </div><div class="cart-description">
//   <h3></h3>
//   <span class="subcomponents"></span>
//   </div></li>
// </script>

//     </>
//   );
// }

// export default Store;
// export const task = () =>
//   sequence(
//     find('src/**/*.js'),
//     read,
//     babel(babelConfig),
//     write('build/')
//   )
import "../pages/Stories.css";
import React from "react";
import { Link } from "react-router-dom";
function Store() {
  return (
    <div>
      <section class="section-a">
        <div class="container">
          <div>
            <h1 className="krut">Ferruccio Lamborghini</h1>
            <p className="krut">
              Ferruccio Lamborghini (Italian pronunciation: [ferˈruttʃo
              lamborˈɡiːni]; 28 April 1916 – 20 February 1993) was an Italian
              automobile designer, inventor, mechanic, engineer, winemaker,
              industrialist and businessman who created Automobili Lamborghini
              in 1963, a maker of high-end sports cars in Sant'Agata Bolognese.
              Born to grape farmers in Renazzo, from the comune of Cento in the
              Emilia-Romagna region, his mechanical know-how led him to enter
              the business of tractor manufacturing in 1948, when he founded
              Lamborghini Trattori, which quickly became an important
              manufacturer of agricultural equipment in the midst of Italy's
              post-WWII economic boom.
            </p>
            <a href="https://en.wikipedia.org/wiki/Ferruccio_Lamborghini" class="btn">
              Read More
            </a>
          </div>
          <img
            className="per"
            src="https://lamboelite.ru/sites/default/files/pictures/gallery/681/681_35.jpg"
            alt=""
          />
        </div>
      </section>

      <section id="about" class="section-b">
        <div class="overlay">
          <div class="section-b-inner py-5">
            <h3 class="text-2">Loud & Clear</h3>
            <h2 class="text-5 mt-1">People Aren't Hearing All the Music</h2>
            <p class="mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              repudiandae laboriosam quia, error tempore porro ducimus voluptate
              laborum nostrum iure.
            </p>
          </div>
        </div>
      </section>

      <section class="section-c">
        <div class="gallery">
          <Link to="https://i.ibb.co/CHLBZnp/gal2323.jpg" class="big">
            <img src="https://cutewallpaper.org/21/lamborghini-wallpaper-logo/Lamborghini-Logo-Wallpaper-Star-ULTRA-HD-Textures.jpg" alt="" />
          </Link>
          <Link to="https://i.ibb.co/4pBbhfY/gal39834.jpg" class="big">
            <img src="https://i.pinimg.com/originals/3c/0d/c4/3c0dc492f2bb9e09de5cf2f80bca66cd.jpg" alt="" />
          </Link>
          <Link to="https://i.ibb.co/xSnHP7g/gal43884.jpg" class="big">
            <img src="https://trendymen.ru/images/article1/119160/attachments/home_a.jpg" alt="" />
          </Link>
          <Link to="https://i.ibb.co/QN6Bnrb/gal4958.jpg" class="big">
            <img src="https://pubimg.4mycar.ru/images/full/08e05fbec81d37ed9db957b2937546609eab0f0002.jpeg" alt="" />
          </Link>
          <Link to="https://i.ibb.co/dGZvj75/gal4545.jpg" class="big">
            <img src="https://media.torque.com.sg/public/2017/04/lamborghini-omp-collezione-automobili-lamborghini-centro-stile-lamborghini-centro-stile-squadra-corse-lamborghini-squadra-corse-one-art-attire-fashion-clothes-pic3.jpg" alt="" />
          </Link>
          <Link to="https://i.ibb.co/S6FVFNt/gal74744.jpg" class="big">
            <img src="https://gw.alicdn.com/bao/uploaded/i3/T1NY2RFCtXXXXXXXXX_!!0-item_pic.jpg" alt="" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Store;
