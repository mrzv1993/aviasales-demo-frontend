import React, { Component } from "react";
import styled from "styled-components";

import Inputs from "./Inputs";
import Buttons from "./Buttons";
import SearchButton from "./SearchButton";

const Form = styled.form`
    margin: 1.5rem auto 0 auto;
    width: 100%;

    @media (min-width: 768px) {
        margin-top: 2.5rem;
    }
}
`;

export default function() {
  return (
    <div className="row center-md">
      <div className="col-md-10">
        <Form>
          <Inputs />
          <Buttons />
          <SearchButton />
        </Form>
      </div>
    </div>
  );
}
