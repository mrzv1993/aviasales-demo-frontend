import React, { Component } from "react";
import styled from "styled-components";
import BlockTitle from "../BlockTitle";
import Category from "./Category/index";
import Cards from "./Cards/index";

const PopularWays = styled.section`
  background-color: #f8fcff;
`;

export default function() {
  return (
    <PopularWays>
      <div className="container">
        <BlockTitle />
        <Category />
        <Cards />
      </div>
    </PopularWays>
  );
}
