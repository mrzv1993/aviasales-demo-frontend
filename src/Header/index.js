import React, { Component } from "react";
import styled from "styled-components";

import Header from "./Header";
import Hero from "./Hero";

const Head = styled.header`
  height: 100vh;
  background: linear-gradient(148.48deg, #079dd4 22.46%, #196ebd 122.26%);
`;

export default function() {
  return (
    <Head>
      <div className="container">
        <Header />
        <Hero />
      </div>
    </Head>
  );
}
