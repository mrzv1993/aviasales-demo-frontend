import React, { Component } from "react";
import styled from "styled-components";

import Header from "./Header";
import Result from "./Result";

const Page = styled.div`
  min-width: 320px;
`;

const Search = () => (
  <Page>
    <Header />
    <Result />
  </Page>
);
export default Search;
