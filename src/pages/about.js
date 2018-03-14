import React from "react"
import Link from "gatsby-link"
import { css } from "emotion"
import {
  PRIMARY_TEXT,
  SECONDARY_TEXT,
  NICER_BLUE
} from "../components/constants"
import {
  Contact,
  Header,
  FullScreenWrapper,
  Wrapper,
  WhatWeDo,
  CaseStudyCards,
  OurTeam
} from "../components"

import Logo from "../img/logo.svg"
import greenville from "../img/greenville.png"

export default class AboutPage extends React.Component {
  render() {
    return (
      <section
        className={css`
          background-color: ${NICER_BLUE};
          color: ${SECONDARY_TEXT};
        `}>
        <div>
          {/* <Wrapper>
            <Header>
              <img src={Logo} alt="Nicer Logo" style={{ width: "140px" }} />
              <h2
                className={css`
                  width: 650px;
                `}>
                So About Us...
              </h2>
              <p
                className={css`
                  width: 650px;
                  font-size: 22px;
                `}>
                Nicer is a product-centric studio that helps companies create,
                build and launch their next product. We’re also here to create
                and build our own products to solve the problems we see.<br />
                <br /> We started out as just a Slack Channel of college friends
                looking to make fun projects together, and it’s grown into a
                real thing with, like, a bank account and stuff. That’s pretty
                awesome if you ask me. <br />
                <br />Our work has been featured in The Verge, Mashable, The
                Next Web, Adweek, and The Atlantic.
              </p>
            </Header>
          </Wrapper> */}
          <Wrapper>
            <OurTeam />
          </Wrapper>
          <Wrapper>
            <WhatWeDo />
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
