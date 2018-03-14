import React from "react"
import Content from "./Content"
import Wrapper from "./Wrapper"
import { css } from "emotion"
import { PRIMARY_TEXT } from "./constants"

export default function PostContent({ title, content }) {
  return (
    <div
      className={css`
        width: 100%;
        max-width: 1000px;
        padding: 0;
        margin: 100px auto;
        overflow: hidden;
      `}>
      <header
        className={css`
          text-align: center;
          max-width: 750px;
          padding: 0 20px;
          margin: 0 auto 20px;
        `}
      />
      <div
        className={css`
          position: relative;
          margin: 0 auto;
          max-width: 750px;
          padding: 20px;
          width: 100%;
          background-color: white;
        `}>
        <Content
          html={content}
          className={css`
            img {
              position: relative;
              left: 50%;
              transform: translateX(-50%);
              width: calc(100% + ${1100 - 800 + 40}px);
            }
          `}
        />
      </div>
    </div>
  )
}
