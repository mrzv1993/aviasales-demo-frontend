import React, { Component } from "react";
import styled from "styled-components";

import compass from "./compass-img.svg";
import edit from "./edit-icon.svg";

const Title = styled.div`
  padding-top: 2.5rem;
  text-align: center;
  min-width: 312px;

  @media (min-width: 768px) {
    padding-top: 4rem;
  }
`;

const Label = styled.div`
  margin: 0 auto;
  background-image: url(${compass});
  width: 64px;
  height: 64px;
`;

const Txt = styled.h2`
  font-weight: 500;
  line-height: 1.125rem;
  font-size: 1.125rem
  margin-top: 1.5rem;
  color: #4a4a4a;

  @media (min-width: 768px) {
    margin-top: 2.5rem;
    font-size: 1.5rem;
  }
`;

const ChangeCity = styled.button`
  color: #00ace2;
  background: transparent;
  border: none;

  &:hover {
    color: #ff9241;
  }
`;

export default function() {
  return (
    <Title>
      <Label />
      <Txt>
        Популярные направления перелетов из города
        <ChangeCity>
          {" "}
          Москва <img src={edit} alt="edit" />
        </ChangeCity>
      </Txt>
    </Title>
  );
}
