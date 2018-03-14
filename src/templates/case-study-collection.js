import React from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"
import { CaseStudyCards, Wrapper } from "../components"

export default class CasePageTemplate extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    pathContext: PropTypes.object.isRequired
  }

  render() {
    return (
      <div>
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
  }
`
