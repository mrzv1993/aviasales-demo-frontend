import React from "react";
import styled from "styled-components";

import Title from "./Title";
import Socials from "./Socials";
import Subscription from "./Subscription";

const Subscribe = styled.div`
  padding: 3rem 0;
  @media screen and (max-width: 768px) {
    display: none;
  }
  background: url();
  background-repeat-y: no-repeat;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  @media screen and (min-width: 1200px;) {
    flex-direction: row;
  }
`;

export default () => {
  return (
    <Subscribe>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-xl-10 col-xl-offset-1">
            <FlexWrapper>
              <Title />
              <Socials />
              <Subscription />
            </FlexWrapper>
          </div>
        </div>
      </div>
    </Subscribe>
  );
};
