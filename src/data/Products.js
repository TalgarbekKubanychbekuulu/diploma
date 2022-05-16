import productImage from "../assets/car3.jpg";
import productImage2 from "../assets/Lampo3.jpg";
import productImage3 from "../assets/lampo4.jpg";
import productImage1 from "../assets/lampo2.jpg";
import parts from "../assets/titan.jpg"
import wdImage from "../assets/4wd.jpg"
import model from "../assets/new lambo.jpg"

import "./Products.css"

  const products = [
    {
      image: productImage2,
      productId: "hazelnut",
      categoryId: "inter_cars",
      title: "lamborghini",
      description: `When the fruit is ripe, it is almost always handpicked, using either "selective picking", where only the ripe fruit is removed, or "strip-picking", where all of the fruit is removed from a limb all at once. Selective picking is often used to produce higher quality coffee because the cherries are picked at their ripest. Strip-picking is indiscriminate and will harvest unripe, ripe, and over-ripe fruit. To improve quality after strip-picking, the harvest must be sorted.`,
  },
    {
      image: productImage1,
      productId: "dark-roast",
      categoryId: "inter_cars",
      title: " lamborghini2",
      description: `The Asian palm civet eats coffee berries and excretes the beans. Because the civet prefers the taste of the ripest cherries, the civet selectively harvests the cherries. Its digestive system then processes the beans by breaking down the mucilage and pulp surrounding the seed. Once the seeds are excreted by the civet, they can be harvested, processed and sold as a niche product. Once they are finally processed, these beans are called kopi luwak, and are often marketed as a rare and expensive coffee.`,
  },
    {
      image: productImage3,
      productId: "house-blend",
      categoryId: "inter_cars",
      title: "House blend",
      description: `Two methods are primarily used to process coffee berries. The first, "wet" or "washed" process, has historically usually been carried out in Central America and areas of Africa. The flesh of the cherries is separated from the seeds and then the seeds are fermented – soaked in water for about two days. This softens the mucilage, which is a sticky pulp residue that is still attached to the seeds. Then this mucilage is washed off with water.`,
    },
    {
      image: productImage,
      productId: "light-roast",
      categoryId: "inter_cars",
      title: "lamborghini",
      description: `The "dry processing" method, cheaper and simpler, was historically used for lower-quality beans in Brazil and much of Africa, but now brings a premium when done well. Twigs and other foreign objects are separated from the berries and the fruit is then spread out in the sun on concrete, bricks or raised beds for 2–3 weeks, turned regularly for even drying.`,
    },
    {
      image: productImage,
      productId: "light-roast",
      categoryId: "inter_cars",
      title: "lamborghini",
      description: `The "dry processing" method, cheaper and simpler, was historically used for lower-quality beans in Brazil and much of Africa, but now brings a premium when done well. Twigs and other foreign objects are separated from the berries and the fruit is then spread out in the sun on concrete, bricks or raised beds for 2–3 weeks, turned regularly for even drying.`,
    },
    {
      image: productImage,
      productId: "Inter_Car",
      categoryId: "inter_cars",
      title: "lamborghini",
      description: `Clinical research indicates that moderate coffee consumption is benign or mildly beneficial as a stimulant in healthy adults, with continuing research on whether long-term consumption reduces the risk of some diseases, although some of the long-term studies are of questionable credibility.`,
    },
    {
      image: parts,
      productId: "Inter_Car",
      categoryId: "auto parts",
      title: "sport car parts",
      description: `The "dry processing" method, cheaper and simpler, was historically used for lower-quality beans in Brazil and much of Africa, but now brings a premium when done well. Twigs and other foreign objects are separated from the berries and the fruit is then spread out in the sun on concrete, bricks or raised beds for 2–3 weeks, turned regularly for even drying.`,
    },
    {
      image: wdImage,
      productId: "othermodels",
      categoryId: "Other  dfgff Models",
      title: "Other Models",
      description: `Clinical research indicates that moderate coffee consumption is benign or mildly
       beneficial as a stimulant in healthy adults, with continuing research on whether long-term consumption reduces the risk of some diseases, although some of the long-term studies are of questionable credibility.`,
    },
    {
      productId: "New models",
      categoryId: "New models",
     title: "New models",
     image: model,
     desciption:"The Aventador has been created to anticipate the future, as demonstrated by the use of innovative technology, including a V12 engine and the extensive use of carbon fiber. The authentic design masterpieces together stark dynamism with aggression to produce a cutting edge carbon fiber monocoque.",
    },
  ];

  export function getProducts(categoryId) {
    if (categoryId) {
      return products.filter(product => product.categoryId === categoryId);
    }
    return products;
  }
  
  export function getProduct(productId) {
    return products[
      products.findIndex(
        product =>  product.productId === productId
      )
    ];
  }