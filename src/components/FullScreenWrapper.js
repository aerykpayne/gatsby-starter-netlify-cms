import React from "react"
import { css, cx } from "emotion"

export default function Wrapper({ className, ...rest }) {
  const wrapperClass = css`
    width: 100%;
    margin: 0 auto;
  `
  return <div {...rest} className={cx(wrapperClass, className)} />
}
