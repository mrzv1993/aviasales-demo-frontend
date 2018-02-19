import React, { Component } from "react";
import styled from "styled-components";
import FooterLinks from "./FooterLinks";
import SocialLinks from "./SocialLinks";

const Footer = styled.footer`
  background-color: #ffffff;
`;

export default function() {
  return (
    <Footer>
      <div className="container">
        <FooterLinks />
        <SocialLinks />
      </div>
    </Footer>
  );
}
