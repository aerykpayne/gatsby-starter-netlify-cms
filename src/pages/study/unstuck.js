import React from "react"
import Link from "gatsby-link"
import { css } from "emotion"
import {
  PRIMARY_TEXT,
  SECONDARY_TEXT,
  NICER_BLUE
} from "../../components/constants"
import {
  Contact,
  Header,
  FullScreenWrapper,
  Wrapper,
  WhatWeDo,
  CaseStudyCards,
  OurTeam
} from "../../components"

import Logo from "../../img/logo.svg"
import greenville from "../../img/greenville.png"

export default class UnstuckPage extends React.Component {
  render() {
    return (
      <section
        className={css`
          background-color: ${NICER_BLUE};
          color: ${SECONDARY_TEXT};
        `}>
        <div>
          <Wrapper>
            <h1>Unstuck</h1>
            <OurTeam />
          </Wrapper>
          <FullScreenWrapper
            className={css`
              position: relative;
              width: 100vw;
              background-size: cover;
              background-repeat: no-repeat;
              background-position: center;
              background-image: url(${greenville});
              background-color: ${NICER_BLUE};
            `}>
            <Wrapper>
              <Contact
                ContactCTA="Interesting in Working with us?"
                ContactCopy="We are always looking for things to build—things that we can be proud of. Currently accepting projects starting at $10k."
              />
            </Wrapper>
          </FullScreenWrapper>
        </div>
      </section>
    )
  }
}
