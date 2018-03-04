import React from "react";
import styled from "styled-components";

import calendar from "./calendar.svg";

const ButtonForward = styled.button`
  background-image: url(${calendar});
  padding: 1.15rem 1rem;
  background-color: #ffffff;
  background-repeat: no-repeat;
  background-position: center right 1rem;
  border: none;
  width: 100%;
  height: 56px;
  font-size: 1rem;
  color: #a0b0b9;
  text-align: left;
  @media (min-width: 768px) {
    border-bottom-left-radius: 4px;
  }
  @media (min-width: 1200px) {
    border-bottom-left-radius: 0px;
  }
`;

export default function() {
  return <ButtonForward type="button">Туда</ButtonForward>;
}
