import React, { Component } from "react";
import styled from "styled-components";
import BlockTitle from "../BlockTitle";
import Category from "./Category/index";
import Cards from "./Cards/index";

const Wrapper = styled.section`
  background-color: #f8fcff;
`;

export default function() {
  return (
    <Wrapper>
      <div className="container">
        <BlockTitle />
        <div className="row">
          <div className="col-xl-8 col-xl-offset-2 col-md-10 col-md-offset-1 col-xs-12">
            <Category />
          </div>
        </div>
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <Cards />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
