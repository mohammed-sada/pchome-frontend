import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SEO } from "../components";
const ErrorPage = () => {
  return (
    <Wrapper className="page-100">
      <SEO title="Error" />

      <section>
        <h1>404</h1>
        <h3>نأسف هذه الصفحة غير موجودة</h3>
        <Link to="/" className="btn">
          الرجوع للصفحة الرئيسية{" "}
        </Link>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`;

export default ErrorPage;
