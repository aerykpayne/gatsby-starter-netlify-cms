import React from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"
import { cx, css } from "emotion"
import { CaseStudyCards, Wrapper, ProjectCards } from "../components"
import { NICER_BLUE } from "../components/constants"

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
        `}>
        <Wrapper>
          <CaseStudyCards
            cases={this.props.data.caseStudyPosts.edges.map(edge => edge.node)}
          />
          {this.props.pathContext.toPrev && (
            <Link primary to={this.props.pathContext.toPrev}>
              Prev Page
            </Link>
          )}
          {this.props.pathContext.toNext && (
            <Link primary to={this.props.pathContext.toNext}>
              Next Page
            </Link>
          )}
        </Wrapper>
        <Wrapper>
          <ProjectCards projects={projects.edges.map(edge => edge.node)} />
        </Wrapper>
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
