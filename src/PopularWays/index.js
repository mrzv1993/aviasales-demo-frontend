import React, { Component } from "react";
import styled from "styled-components";

import Category from "./Category/index";
import Cards from "./Cards/index";

import compass from "./compass-img.svg";
import edit from "./edit-icon.svg";

const Wrapper = styled.section`
  background-color: #f8fcff;
`;

const SectionTitleWrap = styled.div`
  padding-top: 2.5rem;
  text-align: center;
  min-width: 312px;

  @media (min-width: 768px) {
    padding-top: 4rem;
  }
`;

const Label = styled.div`
  margin: 0 auto;
  background-image: url(${compass});
  width: 64px;
  height: 64px;
`;

const TitleText = styled.h2`
  font-weight: 500;
  line-height: 1.125rem;
  font-size: 1.125rem
  margin-top: 1.5rem;
  color: #4a4a4a;

  @media (min-width: 768px) {
    margin-top: 2.5rem;
    font-size: 1.5rem;
  }
`;

const ChangeCity = styled.button`
  color: #00ace2;
  background: transparent;
  border: none;

  &:hover {
    color: #ff9241;
  }
`;

export default function() {
  return (
    <Wrapper>
      <div className="container">
        <SectionTitleWrap>
          <Label />
          <TitleText>
            Популярные направления перелетов из города
            <ChangeCity>
              {" "}
              Москва <img src={edit} alt="edit" />
            </ChangeCity>
          </TitleText>
        </SectionTitleWrap>
        <div className="row">
          <div className="col-xl-8 col-xl-offset-2 col-md-10 col-md-offset-1 col-xs-12">
            <Category />
          </div>
        </div>
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <Cards />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
