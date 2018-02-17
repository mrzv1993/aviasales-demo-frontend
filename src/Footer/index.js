import React, { Component } from "react";
import styled from "styled-components";
import FooterLinks from "./FooterLinks";
import Links from "./Links";

const Footer = styled.footer`
  background-color: #ffffff;
`;

export default function() {
  return (
    <Footer>
      <div className="container">
        <FooterLinks />
        <Links />
      </div>
    </Footer>
  );
}
