import React from "react"
import { css, cx } from "emotion"

export default function Wrapper({ className, ...rest }) {
  const wrapperClass = css`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 30px 25px 50px;
  `
  return <div {...rest} className={cx(wrapperClass, className)} />
}
