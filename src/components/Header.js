import React from "react"
import { cx, css } from "emotion"
import Wrapper from "./Wrapper"
import { NICER_BLUE, SECONDARY_TEXT } from "./constants"

import rocket from "../img/rocket.png"

export default function Header({ className, children, ...rest }) {
  const headerClass = css`
    position: relative;
    width: 100%;
    height: 1000px;
    color: white;
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: 95% -10%;
    background-image: url(${rocket});
    background-color: ${NICER_BLUE};
    & + * {
      padding-top: 0 !important;
      margin-top: -150px !important;
    }
    h2 {
      color: ${SECONDARY_TEXT};
      font-size: 48px;
      font-weight: 600;
      line-height: 52px;
      margin-top: 40px;
      margin-bottom: 20px;
    }
  `
  return (
    <header {...rest} className={cx(headerClass, className)}>
      <Wrapper>{children}</Wrapper>
    </header>
  )
}
