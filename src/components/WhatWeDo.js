import React from "react"
import { cx, css } from "emotion"
import Wrapper from "./Wrapper"
import { NICER_BLUE, SECONDARY_TEXT } from "./constants"

const service = css`
  display: flex;
  flex-direction: column;
`

export default function WhatWeDo({ className }) {
  const headerClass = css`
    width: 100%;
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
    h4 {
    }
  `
  return (
    <div className={className}>
      <Wrapper>
        <h4>What We Do</h4>
        <h2>Branding. Websites. Apps. Ping Pong.</h2>
        <div>
          <div className={service}>
            <h5>Web</h5>
            <p>
              The web is where we started, and where we always go back. Need a
              completely custom blog or a slick promo page? This is what we do
              best.
            </p>
          </div>
          <div className={service}>
            <h5>Integrations</h5>
            <p>
              The best things are things that play well with each other. We can
              streamline your tools or build custom software to meet your needs.
            </p>
          </div>
          <div className={service}>
            <h5>MVPs</h5>
            <p>
              We work fast, that’s just the pace we’ve learned to love. We once
              did a weekend hackathon inside a month-long hackathon. If you need
              results yesterday, call us today.
            </p>
          </div>
          <div className={service}>
            <h5>Branding</h5>
            <p>
              Before we became developers we were designers. We know how
              important brand can be, and we’ll make yours stand out.
            </p>
          </div>
          <div className={service}>
            <h5>Apps</h5>
            <p>
              Have something in mind that's bigger than a web app? We do native
              iOS and Android apps as well.
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}
