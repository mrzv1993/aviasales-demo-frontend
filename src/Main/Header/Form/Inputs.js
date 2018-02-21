import React, { Component } from "react";
import styled from "styled-components";

import arrows from "./arrows.svg";

const Inputs = styled.div`
  display: inline-block;
  width: 100%;

  @media (min-width: 1200px) {
    width: 50%;
  }
`;

const DepartInput = styled.div`
  width: 100%;
  position: relative;
  display: inline-block;

  @media (min-width: 768px) {
    width: calc(50% - 1px);
    margin-right: 1px;
  }
`;

const Button = styled.button`
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

const Input = styled.input`
  border: none;
  padding: 1.15rem 1rem 1.2rem 1rem;
  &:focus {
    box-shadow: 0 0 0 2pt #ff9241;
    outline: none;
  }
`;

const Depart = Input.extend`
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

const Coming = Input.extend`
  width: 100%;
  margin-top: 3px;

  @media (min-width: 768px) {
    margin-left: 1px;
    width: calc(50% - 1px);
    border-top-right-radius: 4px;
  }
  @media (min-width: 1200px) {
    margin: 0 1px;
    width: calc(50% - 2px);
    border-top-right-radius: 0px;
  }
`;

export default function() {
  return (
    <Inputs>
      <DepartInput>
        <Depart placeholder="Город вылета" />
        <Button />
      </DepartInput>

      <Coming placeholder="Город прибытия" />
    </Inputs>
  );
}
