import React from "react"
import { css } from "emotion"
import Link from "gatsby-link"
import Wrapper from "./Wrapper"
import { NICER_BLUE, MAX_WIDTH } from "./constants"

import logo from "../img/logo.svg"
import FACEBOOK_ICON from "../img/facebook-icon-o.svg"
import TWITTER_ICON from "../img/twitter-icon-o.svg"
import MAIL_ICON from "../img/mail-icon-o.svg"

export default function Footer() {
  return (
    <footer
      className={css`
        width: 100%;
        color: white;
        background-color: ${NICER_BLUE};
        a {
          color: white;
          text-decoration: none;
        }
      `}>
      <Wrapper
        className={css`
          display: flex;
          padding-top: 20px;
          padding-bottom: 20px;
          justify-content: space-between;
          @media (max-width: 768px) {
            flex-direction: column;
          }
        `}>
        <div>
          <img
            alt="Nicer Studio"
            src={logo}
            className={css`
              height: 50px;
              margin-bottom: 15px;
            `}
          />
        </div>
        <div>
          <ul
            className={css`
              margin: 0;
              padding: 0;
              list-style: none;
              margin: 0 0 20px;
              display: flex;
              justify-content: flex-end;
              @media (max-width: 768px) {
                margin: 50px 0;
                justify-content: flex-start;
              }
              li + li {
                margin-left: 20px;
              }
              img {
                width: 32px;
                height: 32px;
              }
            `}>
            <li>
              <a href="https://twitter.com/opnflds" target="_blank">
                <img src={TWITTER_ICON} />
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <img src={FACEBOOK_ICON} />
              </a>
            </li>
            <li>
              <a href="mailto:grady@openfields.com">
                <img src={MAIL_ICON} />
              </a>
            </li>
          </ul>
        </div>
      </Wrapper>
    </footer>
  )
}
