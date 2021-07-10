import React from "react";
import styled from "styled-components";
import { BiMap, BiPhone, BiTime, BiMobileAlt } from "react-icons/bi";

const Contact = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>Get in touch</h3>
        <div className="content">
          <p>
            <BiMap />
            <span> Address</span> : Palestine – Gaza
            <br />
            <BiPhone />
            <span> Tel</span> : 2880282
            <br />
            <BiMobileAlt />
            <span> Mobile</span> : 0567707779
            <br />
            <BiTime />
            <span> Business Hours</span> : Saturday - Thursday 10.00 AM to 8.00
            PM
          </p>
          <form className="contact-form">
            <input
              type="text"
              className="form-input"
              placeholder="enter name"
            />
            <input
              type="email"
              className="form-input"
              placeholder="enter email"
            />
            <textarea
              className="message"
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Enter your message..."
            ></textarea>
            <button className="submit-btn">send</button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    font-size: 1.3rem;
    max-width: 45em;
    color: var(--clr-grey-1);
    span {
      font-weight: bold;
    }
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr;
  }

  .form-input,
  .submit-btn,
  .message {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }
  .message {
    border-bottom: none;
    outline: none;
  }
  .form-input {
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
    margin-bottom: 1rem;
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-primary-10);
  }
  .submit-btn:hover {
    color: var(--clr-primary-10);
  }

  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 7rem 0;
  }
`;

export default Contact;
