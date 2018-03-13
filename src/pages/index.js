import React from "react"
import Link from "gatsby-link"
import { css } from "emotion"
import {
  PRIMARY_TEXT,
  SECONDARY_TEXT,
  NICER_BLUE
} from "../components/constants"
import { Header, Wrapper } from "../components"
import Logo from "../img/logo.svg"

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

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
                `}>
                Nicer is a product-centric studio that enables companies to
                create, build and launch their next product. We’re also working
                to create and build our own products that solve the problems we
                see.
              </p>
            </Header>
          </Wrapper>
          <Wrapper>
            {posts
              .filter(post => post.node.frontmatter.templateKey === "blog-post")
              .map(({ node: post }) => (
                <Link to={post.fields.slug}>
                  <div
                    style={{ border: "1px solid #eaecee", padding: "2em 4em" }}
                    key={post.id}>
                    <h3
                      className={css`
                        color: ${SECONDARY_TEXT};
                      `}>
                      {post.frontmatter.title}
                    </h3>
                    <p>{post.excerpt}</p>
                  </div>
                </Link>
              ))}
          </Wrapper>
        </div>
      </section>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
