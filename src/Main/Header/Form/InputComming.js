import React, { Component } from "react";
import styled from "styled-components";

////

const Input = styled.input`
  border: none;
  padding: 1.15rem 1rem 1.2rem 1rem;
  &:focus {
    box-shadow: 0 0 0 2pt #ff9241;
    outline: none;
  }
`;

const InputComing = Input.extend`
  width: 100%;
  margin-top: 3px;

  @media (min-width: 768px) {
    margin-left: 2px;
    border-top-right-radius: 4px;
  }
  @media (min-width: 1200px) {
    border-top-right-radius: 0px;
  }
`;

export default function() {
  return (
    <div>
      <InputComing placeholder="Город прибытия" />
    </div>
  );
}
