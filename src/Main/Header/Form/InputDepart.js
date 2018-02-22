import React, { Component } from "react";
import styled from "styled-components";

import arrows from "./arrows.svg";

////

const Input = styled.input`
  border: none;
  padding: 1.15rem 1rem 1.2rem 1rem;
  &:focus {
    box-shadow: 0 0 0 2pt #ff9241;
    outline: none;
  }
`;

const InputDepart = Input.extend`
  width: 100%;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  padding-right: 2.5rem;

  @media (min-width: 768px) {
    border-top-left-radius: 4px;
    border-top-right-radius: 0;
  }

  @media (min-width: 1200px) {
    border-bottom-left-radius: 4px;
  }
`;

const ButtonDepart = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  background-image: url(${arrows});
  background-repeat: no-repeat;
  background-position: center center;
  background-color: transparent;
  height: 100%;
  border: none;
  padding: 0 1.5rem;
`;

export default function() {
  return (
    <div>
      <InputDepart placeholder="Город вылета" />
      <ButtonDepart />
    </div>
  );
}
