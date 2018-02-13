import React, { Component } from "react";
import styled from "styled-components";
import compassLabel from "./assets/compassLabel.svg";

const BlockTitle = styled.div`
  padding-top: 2.5rem;
  text-align: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  font-size: 18px;
  text-align: center;

  color: #4a4a4a;
`;

const Label = styled.div`
  margin: 0 auto;
  background-image: url(${compassLabel});
  width: 64px;
  height: 64px;
`;

export default function() {
  return (
    <BlockTitle>
      <div className="LabelWrap">
        <Label />
      </div>
      <h2>Популярные направления перелетов из города Москва</h2>
    </BlockTitle>
  );
}
