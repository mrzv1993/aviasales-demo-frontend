import React, { Component } from "react";
import styled from "styled-components";
import line from "../assets/line.png";

import vk from "./vk.svg";
import rss from "./rss.svg";
import tw from "./tw.svg";
import fb from "./fb.svg";

const Subscribe = styled.div`
  background: #fff;
  margin-top: 6rem;
  background: #fff repeat-x url(${line}) 50% 0;
  padding: 2rem 0 1rem 0;
`;

const Note = styled.div`
  @media (min-width: 1200px) {
    text-align: left;
  }
`;

const Networks = styled.nav`
  margin-top: 2rem;
`;

const Link = styled.a`
  margin-left: 1rem;
`;

const Form = styled.form`
  position: relative;
  width: 344px;
  margin: 0 auto;
  margin-top: 1.5rem;
`;

const Input = styled.input`
  padding: 0.5rem 1rem;
  border: 1px solid #a0b0b9;
  border-radius: 2px;
  width: 100%;
  max-width: 344px;
`;

const Button = styled.button`
  background-color: #ff8e41;
  border: none;
  padding: 0.5rem 1.5rem;

  line-height: 20px;
  font-size: 16px;
  text-align: center;

  color: #ffffff;
  border-radius: 2px;
  position: absolute;
  right: 0;
`;

export default function() {
  return (
    <div className="hidden-xs">
      <Subscribe>
        <div className="container">
          <div className="row center-md">
            <div className="col-md-6 col-xl-10">
              <div className="row middle-sm center-sm">
                <div className="col-xl-5">
                  <Note>
                    <h3>Хотите знать всё о скидках на авиабилеты?</h3>
                    <p>
                      Вы можете подписаться на нашу рассылку через соцсети или
                      по электронной почте.
                    </p>
                  </Note>
                </div>
                <div className="col-xl-3">
                  <Networks>
                    <Link href="#">
                      <img src={tw} />
                    </Link>

                    <Link href="#">
                      <img src={fb} />
                    </Link>

                    <Link href="#">
                      <img src={vk} />
                    </Link>

                    <Link href="#">
                      <img src={rss} />
                    </Link>
                  </Networks>
                </div>
                <div className="col-xl-4">
                  <Form>
                    <Input placeholder="Ваш Email" />
                    <Button>Подписаться</Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Subscribe>
    </div>
  );
}
