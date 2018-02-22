import React, { Component } from "react";
import styled from "styled-components";

import calendar from "./calendar.svg";

const Button = styled.button`
  padding: 1.15rem 1rem;
  background-color: #ffffff;
  background-repeat: no-repeat;
  background-position: center right 1rem;
  border: none;
  width: 100%;
  height: 56px;
  margin-top: 2px;

  font-size: 1rem;

  color: #a0b0b9;
  text-align: left;
`;

const ButtonReverse = Button.extend`
  background-image: url(${calendar});

  @media (min-width: 768px) {
    margin-left: 2px;
    width: calc(100% - 2px);
  }
`;

export default function() {
  return <ButtonReverse>Обратно</ButtonReverse>;
}
