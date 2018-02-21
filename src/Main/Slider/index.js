import React, { Component } from "react";
import styled from "styled-components";

import arrow from "./arrow.svg";
import agencyLogo1 from "./agency-logo-1.png";
import agencyLogo2 from "./agency-logo-2.png";
import agencyLogo3 from "./agency-logo-3.png";
import agencyLogo4 from "./agency-logo-4.png";
import agencyLogo5 from "./agency-logo-5.png";

const Slider = styled.header`
  background: #fff;
  margin-top: 6rem;
`;

const TitleName = styled.h2`
  font-weight: 500;
  line-height: 40px;
  font-size: 32px;
  text-align: center;

  color: #5c5c5c;
`;

const Sliders = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ArrowPrev = styled.button`
  background-image: url(${arrow});
  width: 18px;
  height: 32px;
  border: none;
  background-color: transparent;
`;

const ArrowNext = styled.button`
  background-image: url(${arrow});
  width: 18px;
  height: 32px;
  border: none;
  background-color: transparent;
  transform: rotate(180deg);
`;

const SliderContent = styled.div``;

const AgencyLogo1 = styled.img`
  padding: 1rem;
`;

const AgencyLogo2 = styled.img`
  padding: 1rem;
`;
const AgencyLogo3 = styled.img`
  padding: 1rem;
`;
const AgencyLogo4 = styled.img`
  padding: 1rem;
`;
const AgencyLogo5 = styled.img`
  padding: 1rem;
`;

export default function() {
  return (
    <div className="hidden-xs">
      <Slider>
        <div className="container">
          <div className="row center-xs">
            <div className="col-xl-10 col-md-12">
              <TitleName>
                Дешевые авиабилеты от крупнейших авиакомпаний и агентств
              </TitleName>
              <Sliders>
                <ArrowPrev />
                <SliderContent>
                  <AgencyLogo1 src={agencyLogo1} alt="" />
                  <AgencyLogo2 src={agencyLogo2} alt="" />
                  <AgencyLogo3 src={agencyLogo3} alt="" />
                  <AgencyLogo4 src={agencyLogo4} alt="" />
                  <AgencyLogo5 src={agencyLogo5} alt="" />
                </SliderContent>
                <ArrowNext />
              </Sliders>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
