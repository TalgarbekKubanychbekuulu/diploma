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

const products = [
  {
    image: productImage2,
    productId: "inter_cars",
    categoryId: "inter_cars2",
    title: "Aventador",
    price: 45000,
    description: `DESIGNED TO PUSH BEYOND PERFORMANCE
    Revolutionary thinking is at the heart of every idea from Automobili Lamborghini. Whether it is aerospace-inspired design or technologies applied to the naturally aspirated V12 engine or carbon-fiber structure, going beyond accepted limits is part of our philosophy..`,
  },

  {
    image: productImage,
    productId: "Inter_Car",
    categoryId: "inter_cars2",
    title: "Lamborghini Urus",
    price: 50000,
    description: `Lamborghini Urus is the world's first sports crossover with a supercar soul and the functionality of an SUV. A four -liter V8 engine with a dual turbocharged capacity of 650 liters. With. And 850 Nm of torque provides acceleration from 0 to 100 km/h in just `,
    h2: "AVENTADOR LP 780-4 ULTIMAE",
  },

  {
    image: model,
    productId: "New-models1",
    categoryId: "New-models",
    title: "Sián FKP 37",
    description:
      "Sián FKP 37 is the first super sporter equipped with a V12 engine with a hybrid technology based on supercondacitors. The combination of power, beauty and the cult engine of the V12 in combination with an electric booster contains this unrivaled miracle of",
    price: 90000,
  },
  {
    image: jacket,
    productId: "Black Jacket",
    categoryId: "Black Jacket2",
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
    productId: "T-shirt",
    categoryId: "T-shirt2",
    title: "T-shirt",
    price: 50000,
    description: `Lamborghini Urus is the world's first sports crossover with a supercar soul and the functionality of an SUV. A four -liter V8 engine with a dual turbocharged capacity of 650 liters. With. And 850 Nm of torque provides acceleration from 0 to 100 km/h in just `,
    h2: "AVENTADOR LP 780-4 ULTIMAE",
  },

  {
    image: futbolka2,
    productId: "White Hoody",
    categoryId: "White Hoody",
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
    productId: "Leather Wallet",
    categoryId: "Leather Wallet2",
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
    productId: "Racing Hoodyr",
    categoryId: "Racing Hoody2",
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
