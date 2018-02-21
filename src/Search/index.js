import React, { Component } from "react";
import styled from "styled-components";

import Header from "./Header";
import Result from "./Result";
import Footer from "../Footer";

const Page = styled.div`
  min-width: 320px;
`;

const Search = () => (
  <Page>
    <Header />
    <Result />
    <Footer />
  </Page>
);
export default Search;
