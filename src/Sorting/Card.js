import React, { Component } from "react";
import styled from "styled-components";

const Sorting = styled.section`
  background-color: #eaeaea;
`;

const Price = styled.p`
  white-space: nowrap;
  margin: 0 0 4px;
  line-height: 20px;
  font-size: 14px;
  text-align: right;
  color: #00bae8;
`;

const Card = styled.section`
  background-color: #eaeaea;
`;

export default props => {
  return (
    <Sorting>
      <Card>
        <p>sad</p>
        <Price>{props.cards.price}</Price>
      </Card>
    </Sorting>
  );
};
