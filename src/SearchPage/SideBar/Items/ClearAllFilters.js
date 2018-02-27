import React from "react";
import styled from "styled-components";

import arrow from "./arrow.svg";
import clear from "./clear.svg";
import check from "./check.svg";
import checked from "./checked.svg";

const ClearAllFilters = styled.div`
  padding: 0.75rem 1rem;
`;

const Title = styled.h2`
  position: relative;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 0.75rem;
  text-transform: uppercase;

  color: #00bde4;
`;

const Arrow = styled.img`
  margin-right: 0.5rem;
`;

const Clear = styled.img`
  position: absolute;
  right: 0;
`;

export default () => {
  return (
    <ClearAllFilters>
      <Title>
        Сбросить все фильтры
        <Clear src={clear} alt="Сбросить фильтр" />
      </Title>
    </ClearAllFilters>
  );
};
