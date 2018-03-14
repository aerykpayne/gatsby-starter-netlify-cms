import React from "react"
import graphql from "graphql"
import { PostContent } from "../components"

export default props => {
  const { caseStudy } = props.data
  if (!caseStudy) return null
  return (
    <PostContent title={caseStudy.frontmatter.title} content={caseStudy.html} />
  )
}

export const pageQuery = graphql`
  query CaseStudyBySlug($slug: String!) {
    caseStudy: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        image
        blurb
        type
        client
      }
    }
  }
`
