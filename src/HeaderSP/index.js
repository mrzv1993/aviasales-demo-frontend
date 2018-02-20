import React, { Component } from "react";
import styled from "styled-components";

import Input from "../Header/Form/Inputs";
import Buttons from "../Header/Form/Buttons";
import SearchButton from "../Header/Form/SearchButton";
import Header from "./Header";

const Head = styled.header`
  padding: 0.5rem 0;
  background: linear-gradient(148.48deg, #079dd4 22.46%, #196ebd 122.26%);
`;

const Form = styled.form``;

export default function() {
  return (
    <Head>
      <div className="container">
        <Header />
        <Form>
          <div className="row">
            <div className="col-xl-10">
              <Input />
              <Buttons />
            </div>
            <div className="col-xl-2">
              <SearchButton />
            </div>
          </div>
        </Form>
      </div>
    </Head>
  );
}
