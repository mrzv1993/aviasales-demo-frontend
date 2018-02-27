import React from "react";
import styled from "styled-components";

import airplane from "./airplane.svg";

const ButtonSearch = styled.button`
  padding: 1rem 1rem;
  background-color: #ff9241;
  border-radius: 4px;
  font-weight: 900;
  font-size: 28px;
  color: #ffffff;
  border: none;
  width: 100%;
  margin-top: 1rem;

  @media (min-width: 768px) {
    width: calc(100% - 2px);
    margin-top: 2rem;
  }

  @media (min-width: 1200px) {
    margin-top: 3rem;
  }

  &:hover {
    background-color: #ff9d54;
  }
`;

const Airpalne = styled.img`
  height: 24px;
  margin-left: 0.75rem;
`;

export default function() {
  return (
    <ButtonSearch type="button">
      Найти билеты <Airpalne src={airplane} alt="airplane" />
    </ButtonSearch>
  );
}
