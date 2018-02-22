import React, { Component } from "react";
import styled from "styled-components";
import aero from "./aero.svg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Button = styled.button`
  display: flex;
  margin: 0 auto;
  margin-top: 1rem;
  padding: 1rem 1rem;
  width: 100%;
  border: none;
  border-radius: 4px;
  background: #ff9241;

  justify-content: center;
  align-items: center;

  &:hover {
    background: #d97d38;
  }

  @media (min-width: 768px) {
    max-width: 312px;
    margin-top: 2rem;
  }
`;

const Txt = styled.span`
  padding-right: 1rem;
  color: #ffffff;
  font-weight: 900;
  font-size: 1.5rem;
`;

export default function() {
  return (
    <Link to="/search">
      <Button>
        <Txt>Найти билеты</Txt>
        <img src={aero} alt="" />
      </Button>
    </Link>
  );
}