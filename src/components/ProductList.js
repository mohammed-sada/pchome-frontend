import React from "react";
import GridView from "./GridView";
import ListView from "./ListView";
import { useFilterContext } from "../context/filter_context";

const ProductList = () => {
  const { filtered_products: products, gridView } = useFilterContext();

  if (products.length < 1)
    return (
      <h3 style={{ textTransform: "none" }}>
        Sorry, no products matched your search.
      </h3>
    );

  if (gridView === false) return <ListView products={products} />;

  return <GridView products={products} />;
};

export default ProductList;
