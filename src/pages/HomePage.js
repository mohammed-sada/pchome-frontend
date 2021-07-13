import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  FeaturedProducts,
  Hero,
  Services,
  Contact,
  LatestProducts,
  Add,
  Categories,
  SEO,
} from "../components";
import { useProductsContext } from "../context/products_context";
import { breakPoints1, breakPoints2, categories } from "../utils/constants";

const HomePage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);
  const {
    latest_products: latest,
    products_loading: loading,
    products_error: error,
  } = useProductsContext();
  return (
    <main>
      <SEO title="PC-Home" />
      <div data-aos="fade-up">
        <Hero />
      </div>

      <div data-aos="fade-down">
        <Add breakPoints={breakPoints1} />
      </div>

      <div data-aos="fade-right">
        <Categories data={categories} breakPoints={breakPoints2} />
      </div>

      <div data-aos="zoom-in">
        <FeaturedProducts />
      </div>

      <div data-aos="fade-up">
        <Services />
      </div>

      <div data-aos="zoom-in">
        <LatestProducts
          data={latest}
          loading={loading}
          error={error}
          breakPoints={breakPoints2}
        />
      </div>

      <div data-aos="fade-up">
        <Contact />
      </div>
    </main>
  );
};

export default HomePage;
