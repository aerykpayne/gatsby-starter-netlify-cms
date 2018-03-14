import React from "react"
import Link from "gatsby-link"
import { css } from "emotion"
import {
  PRIMARY_TEXT,
  SECONDARY_TEXT,
  NICER_BLUE
} from "../components/constants"
import { Header, Wrapper, CaseStudyCards } from "../components"
import Logo from "../img/logo.svg"

export default class AboutPage extends React.Component {
  render() {
    return (
      <section
        className={css`
          background-color: ${NICER_BLUE};
          color: ${SECONDARY_TEXT};
        `}>
        <div>
          <Wrapper>
            <Header>
              <img src={Logo} alt="Nicer Logo" style={{ width: "140px" }} />
              <h2
                className={css`
                  width: 650px;
                `}>
                We build and launch brands, websites, and apps.
              </h2>
              <p
                className={css`
                  width: 650px;
                  font-size: 22px;
                `}>
                Nicer is a product-centric studio that enables companies to
                create, build and launch their next product. We’re also working
                to create and build our own products that solve the problems we
                see.
              </p>
            </Header>
          </Wrapper>
          <Wrapper
            className={css`
              position: relative;
              bottom: 650px;
            `}
          />
        </div>
      </section>
    )
  }
}
