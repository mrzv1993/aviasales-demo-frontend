import React, { Component } from "react";
import styled from "styled-components";
import Card from "./Card";

const Wrapper = styled.div`
  margin-top: 2rem;

  @media (max-width: 767px) {
    margin-top: 2.5rem;
  }
`;

export default function() {
  return (
    <Wrapper>
      <div className="row">
        <div className="col-xs-12 col-xl-6">
          <Card />
        </div>
        <div className="col-xs-12 col-xl-6">
          <Card />
        </div>
        <div className="col-xs-12 col-xl-6">
          <Card />
        </div>
        <div className="col-xs-12 col-xl-6">
          <Card />
        </div>
        <div className="col-xs-12 col-xl-6">
          <Card />
        </div>
        <div className="col-xs-12 col-xl-6">
          <Card />
        </div>
      </div>
    </Wrapper>
  );
}
