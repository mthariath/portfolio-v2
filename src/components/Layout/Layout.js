import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { StaticQuery, graphql } from 'gatsby'

import { Nav, LayoutGrid, Fade, Background } from 'src/components'
import './layout.css'
import { FlavorContext } from '../../utils'

class Layout extends Component {
  render() {
    let color = ''
    // if(this.props.location === '/')
    color =
      this.props.location === '/'
        ? 'teal'
        : this.props.location.includes('portfolio')
        ? 'lavender'
        : this.props.location.includes('blog')
        ? 'orange'
        : this.props.location.includes('about')
        ? 'cherry'
        : this.props.location.includes('contact')
        ? 'orange'
        : 'teal'
    return (
      <>
        <Nav siteTitle="Mike Thariath" />
        <FlavorContext.Provider value={color}>
          <Fade>
            <LayoutGrid>
              <Background flavor={'lavender'} />
              {/* <Logo /> */}
              {/* <Nav location={this.props.location} /> */}
              <div style={{ gridArea: 'main', zIndex: '100' }}>
                {this.props.children}
              </div>
              {/* <Footer /> */}
            </LayoutGrid>
          </Fade>
        </FlavorContext.Provider>
      </>
    )
  }
}

Layout.propTypes = {
  location: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export { Layout }

// const Layout = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     render={data => (
//       <>
//         <Header siteTitle={data.site.siteMetadata.title} />
//         <div
//           style={{
//             margin: `0 auto`,
//             maxWidth: 960,
//             padding: `0px 1.0875rem 1.45rem`,
//             paddingTop: 0,
//           }}
//         >
//           {children}
//           <footer>
//             © {new Date().getFullYear()}, Built with
//             {` `}
//             <a href="https://www.gatsbyjs.org">Gatsby</a>
//           </footer>
//         </div>
//       </>
//     )}
//   />
// )

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export { Layout }
