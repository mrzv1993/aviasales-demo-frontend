import React, { Component } from "react";
import styled from "styled-components";

const ButtonSearch = styled.button`
  padding: 1.15rem 1rem;
  background: #ff9241;
  border-radius: 4px;
  font-weight: 900;
  line-height: normal;
  font-size: 20px;
  text-align: center;

  color: #ffffff;
  border: none;
  width: 100%;
  height: 56px;
  margin-top: 2px;
  font-size: 1rem;

  @media (min-width: 768px) {
    margin-left: 4px;
    width: calc(100% - 2px);
  }
`;

export default function() {
  return <ButtonSearch>Найти билеты</ButtonSearch>;
}
