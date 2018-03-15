import React from "react"
import Link from "gatsby-link"
import { css } from "emotion"

import mLogo from "../img/minimal-logo.svg"
import {
  NICER_BLUE,
  NICER_PINK,
  SECONDARY_TEXT,
  MAX_WIDTH,
  TERTIARY_TEXT
} from "./constants"

const NavLinks = css`
  position: relative;
  margin-bottom: 10px;
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 0%;
    top: 8px;
    bottom: 13px;
    height: auto;
    border-radius: 2px;
    background: ${NICER_PINK};
    opacity: 1;
  }

  &::before {
    left: -10px;
  }

  &::after {
    right: -10px;
    background: ${NICER_PINK};
    transition: width 500ms cubic-bezier(0.8, 0.1, 0.1, 1);
  }

  &:hover::before {
    border-radius: 2px;
    background: ${NICER_PINK};
    width: 120%;
    transition: width 500ms cubic-bezier(0.8, 0.1, 0.1, 1);
  }

  &:hover::after {
    right: -6px;
    background: transparent;
    width: 120%;
    transition: 0s;
  }
  span {
    position: relative;
    z-index: 3;
    font-size: 24px;
    font-weight: 600;
    color: white;
  }
`
const Navbar = () => (
  <nav
    className={css`
      background-color: ${NICER_BLUE};
      color: ${SECONDARY_TEXT};
    `}>
    <div
      className={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        padding: 20px 0px;
        max-width: ${MAX_WIDTH};
      `}>
      <div>
        <Link to="/" className={NavLinks}>
          <figure
            className={css`
              margin-left: 25px;
            `}>
            <img src={mLogo} alt="Nicer Logo" style={{ width: "60px" }} />
          </figure>
        </Link>
      </div>
      <div>
        <div
          className={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 200px;
            margin-right: 25px;
          `}>
          <Link className={NavLinks} to="/about">
            <span>About Us</span>
          </Link>
          <Link className={NavLinks} to="/work">
            <span>Work</span>
          </Link>
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar
