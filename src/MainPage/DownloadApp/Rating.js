import React from "react";
import styled from "styled-components";
import rating from "./rating.svg";

const Rating = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const Picture = styled.img`
  margin-right: 8px;
`;

const Description = styled.p`
  line-height: 20px;
  font-size: 14px;
  color: #ffffff;
`;

export default function() {
  return (
    <Rating>
      <Picture src={rating} />
      <Description>Более 103 000 оценок</Description>
    </Rating>
  );
}
