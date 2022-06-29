import { useParams } from "react-router-dom";
import Headers from "../Components/Headers/Headers";
import ProductList from "../Components/ProductList/ProductList";
import { getCategory } from "../data/categories";
import { getProducts } from "../data/products";
import React from "react";

function Category() {
  const params = useParams();
  const category = getCategory(params.categoryId);

  if (!category) {
    return null;
  }

  return (
    <>
      <div>
        <Headers title={category.title} image={category.image}>
          {category.description}
        </Headers>

        <ProductList products={getProducts(category.categoryId)} />
      </div>
    </>
  );
}

export default Category;
