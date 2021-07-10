import React from "react";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import { useFilterContext } from "../context/filter_context";
import { Link } from "react-router-dom";

export default function Categories({ breakPoints, data }) {
  const { updateFilters } = useFilterContext();

  return (
    <Wrapper className="section">
      <div className="carousel">
        <div className="carousel-wrapper">
          <Carousel breakPoints={breakPoints}>
            {data.slice(1, -1).map((category, idx) => {
              return (
                <Link
                  to="/products"
                  key={idx}
                  onClick={() =>
                    updateFilters({
                      target: { name: "category", value: category.value },
                    })
                  }
                >
                  <img src={category.image} alt={category.name} />
                  <h5>{category.name}</h5>
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
  .carousel {
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 400px;
  }

  .carousel-wrapper {
    width: 97%;
  }
  img {
    height: 200px;
  }
  a {
    border: none;
    background: none;
    h5 {
      margin-top: 1rem;
      text-align: center;
      color: var(--clr-primary-1);
    }
  }
`;
