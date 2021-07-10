import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  Loading,
  Error,
  ProductImages,
  PageHero,
  AddToCart,
  RelatedProducts,
} from "../components";

const SingleProductPage = () => {
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
    // eslint-disable-next-line
  }, [error]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const { name, desc, price, images, category } = product;

  return (
    <Wrapper>
      <PageHero title={name} product />
      <div className="section section-center page">
        <Link className="btn" to="/products">
          products
        </Link>
        <div className="product-center">
          <ProductImages images={images} />
          <div className="content">
            <h2>{name}</h2>
            <h5 className="price">{formatPrice(price)}</h5>
            <ul className="description">
              {desc &&
                desc.map((item) => {
                  return <li key={item.id}>{item.name}</li>;
                })}
            </ul>

            <p className="info">
              <span>SKU : </span>
              {id}
            </p>

            <hr />
            <AddToCart product={product} />
          </div>
          <RelatedProducts category={category} />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .description {
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 3rem;
    line-height: 2;
    max-width: 45em;
    list-style-type: disc;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 30% 40% 30%;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;
