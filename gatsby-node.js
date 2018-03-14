const path = require("path")
const chunk = require("lodash/chunk")

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  // scroll to bottom
  const createSlugPages = bindSlugPagesCreator(createPage)
  const createPaginationPages = bindPaginationPagesCreator(createPage)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              key
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const { edges } = result.data.allMarkdownRemark
    const filterByKey = key => edges.filter(e => e.node.frontmatter.key === key)

    const caseStudyEdges = filterByKey("case-study")

    // work(/:page)
    createPaginationPages({
      edges: caseStudyEdges,
      rootPath: "/work",
      component: path.resolve("src/templates/case-study-collection.js")
    })
    // work/:slug
    createSlugPages({
      edges: caseStudyEdges,
      layout: "content",
      rootPath: "/work",
      component: path.resolve(`src/templates/case-study-post.js`)
    })
  })
}

// helper functions

const bindSlugPagesCreator = createPage => ({
  edges,
  layout,
  component,
  rootPath
}) => {
  edges.forEach(edge => {
    createPage({
      path: path.join(rootPath, edge.node.frontmatter.slug),
      layout: layout,
      component: component,
      context: {
        slug: edge.node.frontmatter.slug
      }
    })
  })
}

const bindPaginationPagesCreator = createPage => ({
  edges,
  layout,
  component,
  limit = 2,
  rootPath
}) => {
  chunk(edges, limit).forEach((chunk, index, chunks) => {
    createPage({
      path: path.join(rootPath, `${index ? index : ""}`),
      layout: layout,
      component: component,
      context: {
        index: index,
        limit: limit,
        skip: index * limit,
        toPrev: index > 0 ? path.join(rootPath, `${index - 1 || ""}`) : null,
        toNext:
          index < chunks.length - 1 ? path.join(rootPath, `${index + 1}`) : null
      }
    })
  })
}
