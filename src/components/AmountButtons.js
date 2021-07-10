import React from "react";
import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";

const AmountButtons = ({ increase, decrease, amount, error }) => {
  return (
    <Wrapper className="amount-btns">
      <button className="amount-btn" onClick={increase}>
        <FaPlus />
      </button>
      <h2 className="amount">{amount}</h2>
      <button className="amount-btn" onClick={decrease}>
        <FaMinus />
      </button>
      {error && <h5 className="error">out of stock</h5>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  width: 300px;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 2fr;

  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    margin-bottom: 0;
  }
  .error {
    color: #bd0909;
    margin-top: 0.5rem;
  }
`;

export default AmountButtons;
