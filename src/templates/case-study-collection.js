import React from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"
import { cx, css } from "emotion"
import {
  CaseStudyCards,
  FullScreenWrapper,
  Wrapper,
  ProjectCards,
  Contact
} from "../components"
import { NICER_BLUE } from "../components/constants"

import greenville from "../img/greenville.png"

export default class CasePageTemplate extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    pathContext: PropTypes.object.isRequired
  }

  render() {
    const { projects } = this.props.data
    return (
      <div
        className={css`
          background-color: ${NICER_BLUE};
          h3 {
            color: white;
          }
        `}>
        <Wrapper>
          <h3>Our Work:</h3>
          <CaseStudyCards
            cases={this.props.data.caseStudyPosts.edges.map(edge => edge.node)}
          />
        </Wrapper>
        <Wrapper>
          <h3>Because We Could:</h3>
          <ProjectCards projects={projects.edges.map(edge => edge.node)} />
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
    )
  }
}

export const query = graphql`
  query CaseStudyPageQuery($limit: Int, $skip: Int) {
    caseStudyPosts: allMarkdownRemark(
      filter: { frontmatter: { key: { eq: "case-study" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          ...CaseStudyPreview
        }
      }
    }
    projects: allMarkdownRemark(
      filter: { frontmatter: { key: { eq: "project" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 4
    ) {
      edges {
        node {
          ...ProjectPreview
        }
      }
    }
  }
`
