import React from "react";
import styled from "styled-components";
const Error = () => {
  return (
    <Wrapper>
      <div className="section section-center text-center">
        <h2>there was an error...</h2>
      </div>
    </Wrapper>
  );
};

export default Error;
const Wrapper = styled.section`
  background: var(--clr-grey-10);
`;
