import React from "react"
import Link from "gatsby-link"
import { css } from "emotion"
import {
  PRIMARY_TEXT,
  SECONDARY_TEXT,
  NICER_BLUE
} from "../components/constants"
import {
  Header,
  Wrapper,
  FullScreenWrapper,
  CaseStudyCards,
  WhatWeDo,
  Contact
} from "../components"
import Logo from "../img/logo.svg"
import greenville from "../img/greenville.png"
import rocket from "../img/rocket.png"

export default class IndexPage extends React.Component {
  render() {
    const { featuredCaseStudies } = this.props.data
    // const { data } = this.props
    // const { edges: posts } = data.allMarkdownRemark

    return (
      <section
        className={css`
          background-color: ${NICER_BLUE};
          color: ${SECONDARY_TEXT};
        `}>
        <div>
          <FullScreenWrapper
            className={css`
              position: absolute;
              width: 100%;
              height: 1000px;
              color: white;
              background-size: 50%;
              background-repeat: no-repeat;
              background-position: 80% -10%;
              background-image: url(${rocket});
              background-color: ${NICER_BLUE};
            `}
          />
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
                  line-height: 32px;
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
            `}>
            <CaseStudyCards
              cases={featuredCaseStudies.edges.map(edge => edge.node)}
            />
          </Wrapper>
          <Wrapper
            className={css`
              position: relative;
            `}>
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

export const query = graphql`
  query IndexPageQuery {
    featuredCaseStudies: allMarkdownRemark(
      filter: { frontmatter: { key: { eq: "case-study" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          ...CaseStudyPreview
        }
      }
    }
  }
`
