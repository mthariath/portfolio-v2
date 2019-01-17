import React from 'react'
import PropTypes from 'prop-types'
// import { StaticQuery, graphql } from 'gatsby'

import { Nav, LayoutGrid, Logo, Fade, Footer, Background } from 'src/components'
import './layout.css'
import { FlavorContext } from '../../utils'

const Layout = ({ location, children }) => {
  let color = ''
  // if(this.props.location === '/')
  color =
    location === '/'
      ? 'teal'
      : location.includes('portfolio')
      ? 'lavender'
      : location.includes('blog')
      ? 'orange'
      : location.includes('about')
      ? 'cherry'
      : location.includes('contact')
      ? 'orange'
      : 'teal'
  return (
    <>
      <FlavorContext.Provider value={color}>
        <Fade direction="up">
          <LayoutGrid>
            <Background />
            <Logo />
            <Nav location={location} />
            <div style={{ gridArea: 'main', zIndex: '100' }}>{children}</div>
            <Footer />
          </LayoutGrid>
        </Fade>
      </FlavorContext.Provider>
    </>
  )
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
