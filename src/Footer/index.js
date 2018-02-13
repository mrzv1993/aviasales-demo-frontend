import React, { Component } from "react";
import styled from "styled-components";
import Category from "./Category";
import Links from "./Links";

const Footer = styled.footer`
  background-color: #ffffff;
`;

export default function() {
  return (
    <Footer>
      <div className="container">
        <Category />
        <Links />
      </div>
    </Footer>
  );
}
