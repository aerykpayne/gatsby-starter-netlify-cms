import React from "react"
import { cx, css } from "emotion"
import Wrapper from "./Wrapper"
import { NICER_BLUE, SECONDARY_TEXT } from "./constants"

import rocket from "../img/rocket.png"

export default function Header({ className, children, ...rest }) {
  const headerClass = css`
    position: relative;
    width: 100%;
    height: 100%;
    color: white;
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
      {children}
    </header>
  )
}
