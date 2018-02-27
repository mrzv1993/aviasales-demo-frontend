import React from "react";
import styled from "styled-components";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from "../../logo.svg";

const Logo = styled(Link)`
  display: flex;
  margin-top: 0.75rem;
  text-decoration: none;
`;

const LogoImg = styled.img`
  width: 2rem;
`;

const LogoText = styled.span`
  display: none;
  margin-left: 0.75rem;
  color: #ffffff;
  font-weight: 300;
  font-size: 20px;

  @media (min-width: 768px) {
    display: block;
  }
`;

export default function() {
  return (
    <Logo to="/">
      <LogoImg src={logo} alt="Aviasales" title="Aviasales" />
      <LogoText>aviasales</LogoText>
    </Logo>
  );
}
