/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const projects = await graphql(`
    {
      allPrismicProject {
        edges {
          node {
            uid
          }
        }
      }
    }
  `)

  const projectTemplate = path.resolve('./src/templates/project.js')

  projects.data.allPrismicProject.edges.forEach(edge => {
    createPage({
      path: `/work/${edge.node.uid}`,
      component: projectTemplate,
      context: {
        slug: edge.node.uid,
      },
    })
  })
}
