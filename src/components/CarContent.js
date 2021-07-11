import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link, useHistory } from "react-router-dom";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.replace("/");
    clearCart();
  };
  return (
    <Wrapper className="section-center section">
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <div className="link-container">
        <Link to="/products" className="link-btn">
          continue shopping
        </Link>
        <Link to="#" className="link-btn clear-btn" onClick={clearCart}>
          clear shopping cart
        </Link>
      </div>
      <div className="summary">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            className="form-input"
            placeholder="enter name"
            required
          />
          <input
            type="number"
            name="phone"
            className="form-input"
            placeholder="enter phone number"
            required
          />
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="enter email"
          />
          <input
            type="text"
            name="address"
            className="form-input"
            placeholder="enter address"
            required
          />
          <button type="submit" className="btn">
            place order
          </button>
        </form>
        <CartTotals />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    text-align: center;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;

    @media (max-width: 370px) {
      letter-spacing: none;
      font-size: 12px;
    }
  }
  }
  .clear-btn {
    background: var(--clr-red-dark);
  }
  form {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (min-width: 776px) {
      justify-content: flex-start;
    }
  }
  .summary {
    display: flex;
    justify-content: space-between;
    @media (max-width: 776px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
 
  .form-input {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
    width: 20rem;
  }
  .form-input {
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
    margin-bottom: 1rem;
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .btn {
    width: 100%;
    /* margin-top: 1rem; */
    text-align: center;
    font-weight: 700;
  }
`;
export default CartContent;
