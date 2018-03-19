import React from "react"
import Link from "gatsby-link"
import { css } from "emotion"
import { NICER_BLUE, NICER_PINK, TERTIARY_TEXT, MAX_WIDTH } from "./constants"

import greenville from "../img/greenville.png"

const Contact = props => (
  <div
    className={css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 0 auto;
      margin-bottom: 100px;
      width: 100%;
      h2 {
        font-weight: 600;
        font-size: 48px;
        color: white;
        margin: 30px 0px 30px 0px
        letter-spacing: 0.1px;
      }
      h4 {
        font-weight: 600;
        font-size: 22px;
        color: ${TERTIARY_TEXT};
        letter-spacing: 0.1px;
      }
      p {
        font-size: 22px;
      }
      a {
        color: ${NICER_PINK};
      }
    `}>
    <h4>Contact</h4>
    <h2>{props.ContactCTA}</h2>
    <p
      className={css`
        width: 650px;
      `}>
      {props.ContactCopy}
    </p>
    <p
      className={css`
        margin-top: 80px;
      `}>
      Sound like the right fit? <a href="mailto:hello@nicer.io">Get in Touch</a>
    </p>
  </div>
)

export default Contact
