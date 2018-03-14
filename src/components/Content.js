import React from "react"
import { css, cx } from "emotion"
import { PRIMARY_TEXT } from "./constants"

export default function Content({ html, className }) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: html }}
      className={cx(
        css`
          position: relative;
          *:first-child {
            margin-top: 0;
          }
          img {
            position: relative;
            max-width: 100vw;
            width: 100%;
          }
          h1 {
            margin: 10px 0;
          }
          h2 {
            margin: 10px 0;
          }
          h3 {
            margin: 10px 0;
          }
          li {
            font-size: 1.25rem;
            line-height: 2rem;
            margin: 10px 0;
          }
          p {
            color: ${PRIMARY_TEXT};
            font-size: 1.25rem;
            margin: 20px 0;
            line-height: 2rem;
          }
        `,
        className
      )}
    />
  )
}
