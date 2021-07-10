import React from "react";
import {
  FeaturedProducts,
  Hero,
  Services,
  Contact,
  Carouser,
  Add,
  Categories,
} from "../components";
import { useProductsContext } from "../context/products_context";
import { breakPoints1, breakPoints2, categories } from "../utils/constants";

const HomePage = () => {
  const {
    latest_products: latest,
    products_loading: loading,
    products_error: error,
  } = useProductsContext();
  return (
    <main>
      <Hero />
      <Add breakPoints={breakPoints1} />
      <Categories data={categories} breakPoints={breakPoints2} />
      <FeaturedProducts />
      <Services />
      <Carouser
        data={latest}
        loading={loading}
        error={error}
        breakPoints={breakPoints2}
      />
      <Contact />
    </main>
  );
};

export default HomePage;
