import React, { Component } from "react";
import styled from "styled-components";

const Inputs = styled.div`
  display: inline-block;
  width: 100%;

  @media (min-width: 1200px) {
    width: 50%;
  }
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

  @media (min-width: 768px) {
    margin-right: 1px;
    width: calc(50% - 1px);
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
      <Depart placeholder="Город вылета" />
      <Coming placeholder="Город прибытия" />
    </Inputs>
  );
}
