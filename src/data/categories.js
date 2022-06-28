import carsImage from "../assets/fon1.jpg";
// import autoImage from "../assets/titan.jpg";
import model from "../assets/newlambo.jpg";

const categories = [
  {
    image: carsImage,
    categoryId: "Other-Models",
    title: "Other-models",
    description:
      " The Gran Turismo class car, which has been produced by Aston Martin since 2004. Available in two body versions: coupe and convertible. The model was first presented in 2003 at the Frankfurt Motor Show to replace the DB7, the designers of the car were Jan Kallum and his successor Henrik Fisker, who completed the development. The DB9 was the first car designed to be assembled at the Aston Martin factory in Gaydon.",
  },

  {
    image: model,
    categoryId: "New-models",
    title: "New-models",
    description:
      "The Aventador has been created to anticipate the future, as demonstrated by the use of innovative technology, including a V12 engine and the extensive use of carbon fiber. The authentic design masterpieces together stark dynamism with aggression to produce a cutting edge carbon fiber monocoque.",
  },
];
export function getCategories() {
  return categories;
}

export function getCategory(categoryId) {
  return categories[
    categories.FindIndex((category) => category.categoryId === categoryId)
  ];
}
