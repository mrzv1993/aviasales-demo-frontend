import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";

import prev from "./prev-arrow.svg";
import menu from "./menu.svg";
import message from "./message.svg";
import userImg from "./user-img.svg";

import Form from "./Form";
import Header from "./Header";

const Head = styled.header`
  padding: 0.75rem 0;
  background: linear-gradient(
    100deg,
    #00b0de -46.32%,
    #01aedc -42.65%,
    #02abdb -38.93%,
    #02abdb -35.24%,
    #02abdb -35.02%,
    #196ebd 52.98%
  );
`;

export default function() {
  return (
    <Head>
      <div className="container">
        <Header />
        <div className="row hidden-xs hidden-sm">
          <div className="col-md-12">
            <Form />
          </div>
        </div>
      </div>
    </Head>
  );
}
