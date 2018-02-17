import React, { Component } from "react";
import styled from "styled-components";

import Title from "./Title";
import Category from "./Category/index";
import Cards from "./Cards/index";

import compass from "./compass-img.svg";
import edit from "./edit-icon.svg";

const Directions = styled.section`
  background-color: #f8fcff;
`;

export default function() {
  return (
    <Directions>
      <div className="container">
        <Title />
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
    </Directions>
  );
}
