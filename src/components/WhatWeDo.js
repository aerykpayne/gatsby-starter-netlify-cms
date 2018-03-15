import React from "react"
import { cx, css } from "emotion"
import Wrapper from "./Wrapper"
import { NICER_BLUE, SECONDARY_TEXT, TERTIARY_TEXT } from "./constants"

const service = css`
  display: flex;
  flex-direction: column;
  width: 33%;
  padding: 30px 25px;
`

export default function WhatWeDo({ className }) {
  const headerClass = css`
    width: 100%;
    color: white;
    background-color: ${NICER_BLUE};
    h2 {
      color: ${SECONDARY_TEXT};
      font-size: 48px;
      font-weight: 600;
      line-height: 52px;
      margin-top: 30px;
      margin-bottom: 0px;
    }
  `
  return (
    <div className={headerClass}>
      <h4
        className={css`
          font-weight: 600;
          font-size: 22px;
          letter-spacing: 0.1px;
          color: ${TERTIARY_TEXT};
        `}>
        What We Do
      </h4>
      <h2>Branding. Websites. Apps. Ping Pong.</h2>
      <div
        className={css`
          position: relative;
          right: 25px;
          display: flex;
          flex-wrap: wrap;
          h4 {
            font-weight: 600;
            letter-spacing: 0.1px;
            font-size: 22px;
          }
          p {
            line-height: 28px;
            font-size: 18px;
          }
        `}>
        <div className={service}>
          <h4>Web</h4>
          <p>
            The web is where we started, and where we always go back. Need a
            completely custom blog or a slick promo page? This is what we do
            best.
          </p>
        </div>
        <div className={service}>
          <h4>Integrations</h4>
          <p>
            The best things are things that play well with each other. We can
            streamline your tools or build custom software to meet your needs.
          </p>
        </div>
        <div className={service}>
          <h4>MVPs</h4>
          <p>
            We work fast, that’s just the pace we’ve learned to love. We once
            did a weekend hackathon inside a month-long hackathon. If you need
            results yesterday, call us today.
          </p>
        </div>
        <div className={service}>
          <h4>Branding</h4>
          <p>
            Before we became developers we were designers. We know how important
            brand can be, and we’ll make yours stand out.
          </p>
        </div>
        <div className={service}>
          <h4>Apps</h4>
          <p>
            Have something in mind that's bigger than a web app? We do native
            iOS and Android apps as well.
          </p>
        </div>
        <div className={service}>
          <h4>Consulation</h4>
          <p>
            We take our combined experiece in digital product design and
            development, and we then together to solve the problems facing your
            company.
          </p>
        </div>
      </div>
    </div>
  )
}
