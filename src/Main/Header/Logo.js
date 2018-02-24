import React from "react";
import styled from "styled-components";

import logo from "../../logo.svg";

const Logo = styled.div`
  display: flex;
`;

const LogoImg = styled.img`
  width: 2rem;
`;

const Txt = styled.span`
  display: none;
  margin-left: 0.75rem;
  font-weight: 300;
  font-size: 20px;
  color: #ffffff;
  @media (min-width: 768px) {
    display: block;
  }
`;

export default function() {
  return (
    <Logo>
      <LogoImg src={logo} alt="Aviasales" title="Aviasales" />
      <Txt>aviasales</Txt>
    </Logo>
  );
}
