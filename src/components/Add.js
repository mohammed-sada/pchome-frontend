import React from "react";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";
import add1 from "../assets/add1.jpg";
import add2 from "../assets/add2.png";

const images = [add1, add2];
export default function Add({ breakPoints }) {
  return (
    <Wrapper>
      <div className="carousel">
        <div className="carousel-wrapper">
          <Carousel
            enableAutoPlay
            autoPlaySpeed={4000}
            breakPoints={breakPoints}
          >
            {images.map((image, idx) => {
              return <img key={idx} src={image} alt="advertisement" />;
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
    width: 95%;
  }
`;
