import React, { Component } from "react";
import styled from "styled-components";

import Inputs from "./Inputs";
import Buttons from "./Buttons";

import calendar from "./calendar.svg";
import arrow from "./arrow.svg";

const Layout = styled.div`
  margin: 1.5rem auto 0 auto;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 640px;
    margin-top: 3rem;
  }
  @media (min-width: 1440px) {
    max-width: 1040px;
  }
`;

export default function() {
  return (
    <Layout>
      <Inputs />
      <Buttons />
    </Layout>
  );
}
