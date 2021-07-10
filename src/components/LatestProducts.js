import React from "react";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import Product from "./Product";
import Loading from "./Loading";
import Error from "./Error";
import "../carousel/style.css";

export default function Slider({ data, loading, error, breakPoints }) {
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <Wrapper className="section">
      <div className="carousel">
        <div className="carousel-wrapper">
          <div className="title">
            <h2>latest products</h2>
            <div className="underline" />
          </div>
          <div className="featured section-center">
            <Carousel itemPadding={[0, 20]} breakPoints={breakPoints}>
              {data.map((product) => {
                return <Product key={product.id} {...product} />;
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 150px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;
