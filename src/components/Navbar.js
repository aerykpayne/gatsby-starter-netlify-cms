import React from "react"
import Link from "gatsby-link"
import { css } from "emotion"

import mLogo from "../img/minimal-logo.svg"
import {
  NICER_BLUE,
  SECONDARY_TEXT,
  MAX_WIDTH,
  TERTIARY_TEXT
} from "./constants"

const NavLinks = css`
  color: ${SECONDARY_TEXT};
  font-family: Calibre, Roboto, sans-serif;
  font-weight: 600;
  font-size: 24px;
  transition: all 200ms ease;
  &:hover {
    color: ${TERTIARY_TEXT};
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
            About Us
          </Link>
          <Link className={NavLinks} to="/work">
            Work
          </Link>
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar
