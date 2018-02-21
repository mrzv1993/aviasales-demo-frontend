import React, { Component } from "react";
import styled from "styled-components";

import Header from "./Header";
import Result from "./Result";

const FilterButton = styled.button`
  position: fixed;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 1rem;
  max-width: 160px;
  background-color: #00ace2;
  border: none;
  border-radius: 100px;
  padding: 0.75rem 1.25rem;
  font-weight: 900;
  line-height: normal;
  font-size: 1rem;

  color: #ffffff;
`;

const Search = () => (
  <div>
    <FilterButton>Фильтровать</FilterButton>
    <Header />
    <Result />
  </div>
);
export default Search;
