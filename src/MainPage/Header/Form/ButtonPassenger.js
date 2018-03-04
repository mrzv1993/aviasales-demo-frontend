import React from "react";
import styled from "styled-components";

import arrow from "./arrow.svg";

const ButtonPassenger = styled.button`
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  background-image: url(${arrow});
  background-position: center right 1.2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 40px;
  padding: 1.15rem 1rem;
  background-color: #ffffff;
  background-repeat: no-repeat;
  background-position: center right 1rem;
  border: none;
  width: 100%;
  height: 56px;

  line-height: 20px;
  font-size: 16px;

  color: #a0b0b9;
  text-align: left;

  @media (min-width: 768px) {
    border-bottom-left-radius: 0px;
  }
  @media (min-width: 1200px) {
    border-top-right-radius: 4px;
  }
`;

const Quantity = styled.span`
  color: #4a4a4a;
`;

export default function() {
  return (
    <ButtonPassenger type="button">
      <Quantity>1 пассажир,</Quantity> эконом
    </ButtonPassenger>
  );
}
