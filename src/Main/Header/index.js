import React from "react";
import styled from "styled-components";

import Hero from "./Hero";
import Logo from "./Logo";

const Head = styled.header`
  height: 100vh;
  background: linear-gradient(148.48deg, #079dd4 22.46%, #196ebd 122.26%);
`;

const Header = styled.div`
  display: flex;
  padding: 0.75rem 0;
  align-items: center;
`;

export default function() {
  return (
    <Head>
      <div className="container">
        <Header>
          <Logo />
        </Header>
        <Hero />
      </div>
    </Head>
  );
}
