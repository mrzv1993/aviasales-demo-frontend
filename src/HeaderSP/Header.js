import React, { Component } from "react";
import styled from "styled-components";

import logo from "../logo.svg";

const Header = styled.div`
  display: flex;
  padding: 0.75rem 0;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 2rem;
`;

const Logo = styled.span`
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
    <Header>
      <LogoImg src={logo} alt="Aviasales" title="Aviasales" />
      <Logo>aviasales</Logo>
    </Header>
  );
}
