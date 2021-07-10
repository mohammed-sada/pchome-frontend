import React from "react";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import { useFilterContext } from "../context/filter_context";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/helpers";
import { breakPoints1 } from "../utils/constants";

export default function Categories({ category }) {
  const { all_products } = useFilterContext();
  const relatedProducts = all_products.filter((p) => p.category === category);

  return (
    <Wrapper>
      <h4>Related Products</h4>
      <div className="carousel">
        <div className="carousel-wrapper">
          <Carousel verticalMode breakPoints={breakPoints1}>
            {relatedProducts.map((product) => {
              return (
                <Link to={`/products/${product.id}`} key={product.id}>
                  <img src={product.images[0].url} alt={product.name} />
                  <h6>{product.name}</h6>
                  <h6>{formatPrice(product.price)}</h6>
                </Link>
              );
            })}
          </Carousel>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  h4 {
    text-align: center;
    margin-bottom: 3rem;
  }
  .carousel {
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 400px;
  }

  .carousel-wrapper {
    height: 100%;
  }
  img {
    height: 100px;
  }
  a {
    border: none;
    background: none;
    margin-bottom: 1rem;
    h5,
    h6 {
      text-align: center;
      color: var(--clr-primary-1);
    }
  }
`;
