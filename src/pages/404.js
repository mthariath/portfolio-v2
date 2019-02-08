import React from 'react'
import PropTypes from 'prop-types'
import { Layout, SEO } from '../components/'
import { TitleBox, Paragraph, SadFace } from 'components'

const NotFoundPage = ({ location }) => (
  <Layout location={location.pathname}>
    <SEO title="404: Not found" />
    <TitleBox title="404">
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <SadFace />
        <Paragraph Center>
          How embarrassing&hellip; A web developer with a broken link&hellip;
        </Paragraph>
      </div>
    </TitleBox>
  </Layout>
)
NotFoundPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default NotFoundPage
