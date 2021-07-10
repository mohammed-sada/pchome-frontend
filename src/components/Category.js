import React, { useState } from "react";
import styled from "styled-components";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

const Category = ({ item, category, subCategory, updateFilters }) => {
  const [subcat, setSubcat] = useState(false);

  const showSubcat = () => setSubcat(!subcat);

  const handleClick = (e) => {
    item.subCat && showSubcat();
    updateFilters(e);
  };
  return (
    <Wrapper>
      <button
        className={category === item.name ? "active cat-btn" : "cat-btn"}
        type="button"
        name="category"
        value={item.value}
        onClick={handleClick}
      >
        {item.name}

        {item.subCat ? (
          subcat ? (
            <RiArrowUpSFill />
          ) : (
            <RiArrowDownSFill />
          )
        ) : null}
      </button>

      {subcat &&
        item.subCat.map((item, idx) => {
          return (
            <button
              key={idx}
              name="subCategory"
              type="button"
              className={
                subCategory === item.name ? "active subcat-btn" : "subcat-btn"
              }
              onClick={updateFilters}
              value={item.value || item.name}
            >
              {item.name}
            </button>
          );
        })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .cat-btn {
    margin: 0.7rem 0;
  }
  .subcat-btn {
    margin-left: 1rem;
  }
`;
export default Category;
