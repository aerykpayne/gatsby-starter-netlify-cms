import React from "react"
import { cx, css } from "emotion"
import Wrapper from "./Wrapper"
import { NICER_BLUE } from "./constants"

import rocket from "../img/rocket.png"

export default function Header({ className, children, ...rest }) {
  const headerClass = css`
    width: 100%;
    color: white;
    padding-top: 50px;
    padding-bottom: 80px;
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: 90% -20%;
    background-image: url(${rocket});
    background-color: ${NICER_BLUE};
    & + * {
      padding-top: 0 !important;
      margin-top: -150px !important;
    }
  `
  return (
    <header {...rest} className={cx(headerClass, className)}>
      <Wrapper>{children}</Wrapper>
    </header>
  )
}
