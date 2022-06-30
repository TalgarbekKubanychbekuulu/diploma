import productImage from "../assets/lambourus.jpg";
import productImage2 from "../assets/Lampo3.jpg";
import model from "../assets/Sian.jpg";
import jacket from "../assets/jacket.jpg";
import tshirt from "../assets/tshirt.jpeg";
import redjacket from "../assets/redjacket4.jpg";
import futbolka from "../assets/futbolka2.jpg";
import futbolka2 from "../assets/futbolka3.jpg";
import cap from "../assets/cap2.jpg";
import beg from "../assets/chemodan2.jpg";
import wallet from "../assets/wallet.jpg";
import racing from "../assets/racing2.jpg";
import old1 from "../assets/old1.webp";
import old2 from "../assets/old2.jpg";
import old3 from "../assets/old3.jpg";
import old4 from "../assets/old4.jpg";
import old5 from "../assets/old5.jpg";
import new1 from "../assets/new1.jpg";
import new2 from "../assets/new2.jpg";
import new3 from "../assets/new3.webp";

const products = [
  {
    image: new1,
    productId: "Aventado",
    categoryId: "Aventador",
    title: "Aventador",
    price: 45000,
    description: `DESIGNED TO PUSH BEYOND PERFORMANCE
    Revolutionary thinking is at the heart of every idea from Automobili Lamborghini. Whether it is aerospace-inspired design or technologies applied to the naturally aspirated V12 engine or carbon-fiber structure, going beyond accepted limits is part of our philosophy..`,
  },

  {
    image: new2,
    productId: "Lamborghini E-class",
    categoryId: "Lamborghini E-classs",
    title: "Lamborghini E-class",
    price: 50000,
    description: `Lamborghini Urus is the world's first sports crossover with a supercar soul and the functionality of an SUV. A four -liter V8 engine with a dual turbocharged capacity of 650 liters. With. And 850 Nm of torque provides acceleration from 0 to 100 km/h in just `,
    h2: "AVENTADOR LP 780-4 ULTIMAE",
  },

  {
    image: new3,
    productId: "Lamborghini",
    categoryId: "Lamborghini",
    title: "Lamborghini ",
    description:
      "Sián FKP 37 is the first super sporter equipped with a V12 engine with a hybrid technology based on supercondacitors. The combination of power, beauty and the cult engine of the V12 in combination with an electric booster contains this unrivaled miracle of",
    price: 90000,
  },
  
  {
    image: productImage2,
    productId: "Aventadors",
    categoryId: "Aventadors",
    title: "Aventador",
    price: 45000,
    description: `DESIGNED TO PUSH BEYOND PERFORMANCE
    Revolutionary thinking is at the heart of every idea from Automobili Lamborghini. Whether it is aerospace-inspired design or technologies applied to the naturally aspirated V12 engine or carbon-fiber structure, going beyond accepted limits is part of our philosophy..`,
  },

  {
    image: productImage,
    productId: "LamborghiniUrus",
    categoryId: "LamborghiniUrus",
    title: "Lamborghini Urus",
    price: 50000,
    description: `Lamborghini Urus is the world's first sports crossover with a supercar soul and the functionality of an SUV. A four -liter V8 engine with a dual turbocharged capacity of 650 liters. With. And 850 Nm of torque provides acceleration from 0 to 100 km/h in just `,
    h2: "AVENTADOR LP 780-4 ULTIMAE",
  },

  {
    image: model,
    productId: "SianFKP37",
    categoryId: "SianFKP37",
    title: "Sián FKP 37",
    description:
      "Sián FKP 37 is the first super sporter equipped with a V12 engine with a hybrid technology based on supercondacitors. The combination of power, beauty and the cult engine of the V12 in combination with an electric booster contains this unrivaled miracle of",
    price: 90000,
  },
  {
    image: old1,
    productId: "OldLamborghinis",
    categoryId: "OldLamborghinis",
    title: "Old Lamborghini",
    price: 45000,
    description: `DESIGNED TO PUSH BEYOND PERFORMANCE
    Revolutionary thinking is at the heart of every idea from Automobili Lamborghini. Whether it is aerospace-inspired design or technologies applied to the naturally aspirated V12 engine or carbon-fiber structure, going beyond accepted limits is part of our philosophy..`,
  },

  {
    image: old2,
    productId: "OldLamborghinor",
    categoryId: "OldLamborghinor",
    title: "Old Lamborghini ",
    price: 50000,
    description: `Lamborghini Urus is the world's first sports crossover with a supercar soul and the functionality of an SUV. A four -liter V8 engine with a dual turbocharged capacity of 650 liters. With. And 850 Nm of torque provides acceleration from 0 to 100 km/h in just `,
    h2: "AVENTADOR LP 780-4 ULTIMAE",
  },

  {
    image: old3,
    productId: "OldLamborghines",
    categoryId: "OldLamborghines",
    title: "Old Lamborghini",
    description:
      "Sián FKP 37 is the first super sporter equipped with a V12 engine with a hybrid technology based on supercondacitors. The combination of power, beauty and the cult engine of the V12 in combination with an electric booster contains this unrivaled miracle of",
    price: 90000,
  },
  {
    image: old4,
    productId: "OldLamborghinrer",
    categoryId: "OldLamborghinrer",
    title: "Old Lamborghini",
    price: 45000,
    description: `DESIGNED TO PUSH BEYOND PERFORMANCE
    Revolutionary thinking is at the heart of every idea from Automobili Lamborghini. Whether it is aerospace-inspired design or technologies applied to the naturally aspirated V12 engine or carbon-fiber structure, going beyond accepted limits is part of our philosophy..`,
  },

  {
    image: old5,
    productId: "OldLamborghinter",
    categoryId: "OldLamborghinter",
    title: "Old Lamborghini ",
    price: 50000,
    description: `Lamborghini Urus is the world's first sports crossover with a supercar soul and the functionality of an SUV. A four -liter V8 engine with a dual turbocharged capacity of 650 liters. With. And 850 Nm of torque provides acceleration from 0 to 100 km/h in just `,
    h2: "AVENTADOR LP 780-4 ULTIMAE",
  },

  {
    image: old3,
    productId: "OldLamborghint",
    categoryId: "OldLamborghint",
    title: "Old Lamborghini",
    description:
      "Sián FKP 37 is the first super sporter equipped with a V12 engine with a hybrid technology based on supercondacitors. The combination of power, beauty and the cult engine of the V12 in combination with an electric booster contains this unrivaled miracle of",
    price: 90000,
  },
  {
    image: jacket,
    productId: "BlackJackets",
    categoryId: "BlackJackets",
    title: "Black Jacket",
    price: 45000,
    description: `DESIGNED TO PUSH BEYOND PERFORMANCE
    Revolutionary thinking is at the heart of every idea from Automobili Lamborghini. Whether it is aerospace-inspired design or technologies applied to the naturally aspirated V12 engine or carbon-fiber structure, going beyond accepted limits is part of our philosophy..`,
  },

  {
    image: tshirt,
    productId: "Blazer",
    categoryId: "Blazer2",
    title: "Blazer",
    price: 50000,
    description: `Lamborghini Urus is the world's first sports crossover with a supercar soul and the functionality of an SUV. A four -liter V8 engine with a dual turbocharged capacity of 650 liters. With. And 850 Nm of torque provides acceleration from 0 to 100 km/h in just `,
    h2: "AVENTADOR LP 780-4 ULTIMAE",
  },

  {
    image: futbolka,
    productId: "Tshirt",
    categoryId: "Tshirt2",
    title: "T-shirt",
    price: 50000,
    description: `Lamborghini Urus is the world's first sports crossover with a supercar soul and the functionality of an SUV. A four -liter V8 engine with a dual turbocharged capacity of 650 liters. With. And 850 Nm of torque provides acceleration from 0 to 100 km/h in just `,
    h2: "AVENTADOR LP 780-4 ULTIMAE",
  },

  {
    image: futbolka2,
    productId: "WhiteHoody",
    categoryId: "WhiteHoody",
    title: "White Hoody",
    description:
      "Sián FKP 37 is the first super sporter equipped with a V12 engine with a hybrid technology based on supercondacitors. The combination of power, beauty and the cult engine of the V12 in combination with an electric booster contains this unrivaled miracle of",
    price: 90000,
  },
  {
    image: cap,
    productId: "Cap",
    categoryId: "Cap2",
    title: "Cap",
    price: 45000,
    description: `DESIGNED TO PUSH BEYOND PERFORMANCE
    Revolutionary thinking is at the heart of every idea from Automobili Lamborghini. Whether it is aerospace-inspired design or technologies applied to the naturally aspirated V12 engine or carbon-fiber structure, going beyond accepted limits is part of our philosophy..`,
  },

  {
    image: wallet,
    productId: "LeatherWallet",
    categoryId: "LeatherWallet2",
    title: "Leather Wallet",
    price: 50000,
    description: `Lamborghini Urus is the world's first sports crossover with a supercar soul and the functionality of an SUV. A four -liter V8 engine with a dual turbocharged capacity of 650 liters. With. And 850 Nm of torque provides acceleration from 0 to 100 km/h in just `,
    h2: "AVENTADOR LP 780-4 ULTIMAE",
  },
  {
    image: beg,
    productId: "Suitcase",
    categoryId: "Suitcase2",
    title: "Suitcase",
    price: 50000,
    description: `Lamborghini Urus is the world's first sports crossover with a supercar soul and the functionality of an SUV. A four -liter V8 engine with a dual turbocharged capacity of 650 liters. With. And 850 Nm of torque provides acceleration from 0 to 100 km/h in just `,
    h2: "AVENTADOR LP 780-4 ULTIMAE",
  },
  {
    image: redjacket,
    productId: " Jacket",
    categoryId: " Jacket2",
    title: " Jacket",
    price: 50000,
    description: `Lamborghini Urus is the world's first sports crossover with a supercar soul and the functionality of an SUV. A four -liter V8 engine with a dual turbocharged capacity of 650 liters. With. And 850 Nm of torque provides acceleration from 0 to 100 km/h in just `,
    h2: "AVENTADOR LP 780-4 ULTIMAE",
  },
  {
    image: racing,
    productId: "RacingHoody",
    categoryId: "RacingHoody2",
    title: "Racing Hoody",
    price: 50000,
    description: `Lamborghini Urus is the world's first sports crossover with a supercar soul and the functionality of an SUV. A four -liter V8 engine with a dual turbocharged capacity of 650 liters. With. And 850 Nm of torque provides acceleration from 0 to 100 km/h in just `,
    h2: "AVENTADOR LP 780-4 ULTIMAE",
  },
];

export function getProducts(categoryId) {
  if (categoryId) {
    return products.filter((product) => product.categoryId === categoryId);
  }
  return products;
}

export function getProduct(productId) {
  return products[
    products.findIndex((products) => products.productId === productId)
  ];
}
