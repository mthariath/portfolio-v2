import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import {
  Layout,
  Paragraph,
  ArticleGrid,
  TitleBox,
  SEO,
  ContactModal,
  Button,
  Icon,
} from '../components/'

const IndexPage = ({ location }) => (
  <Layout location={location.pathname}>
    <SEO
      title="Mike Thariath / Web Developer + Product Designer"
      keywords={[
        `web developer`,
        `product designer`,
        `react developer`,
        `front end developer`,
      ]}
    />
    <ArticleGrid
      title="Hi There!"
      subtitle={
        <>
          my name is <strong>Mike Thariath</strong>.
        </>
      }
    >
      <Paragraph>
        I'm a web developer, product designer,and all around good guy living in
        Chicago. I love coming up with ideas that make people's lives better.
      </Paragraph>
      <Paragraph>
        While you're here, please feel free to look at{' '}
        <Link to="/portfolio/">my work</Link> or read about{' '}
        <Link to="/about/">my life and my skills</Link>.
      </Paragraph>
      <Paragraph>
        If you're working on something awesome&nbsp;
        <Paragraph as="span" small>
          (that I can help with,)
        </Paragraph>
        &nbsp;I'd love to hear from you!
      </Paragraph>
      <TitleBox title="connect with me" grid>
        <Button
          icon
          ariaLabel="Github"
          href="https://github.com/mthariath"
          blank
        >
          <Icon icon="github" color="#444444" size="large" />
        </Button>
        <Button
          icon
          ariaLabel="LinkedIn"
          href="https://linkedin.com/in/thariath"
          blank
        >
          <Icon icon="linkedin" color="#444444" size="large" />
        </Button>
        <Button icon ariaLabel="Email" href="mailto:mike@thariath.com">
          <Icon icon="email" size="large" />
        </Button>
        <ContactModal>
          {toggle => (
            <Button icon ariaLabel="Phone" onClick={toggle}>
              <Icon icon="phone" size="large" />
            </Button>
          )}
        </ContactModal>

        {/* <Button Icon link='#' blank><i class="fab fa-github" /></Button> */}
      </TitleBox>
    </ArticleGrid>
  </Layout>
)

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default IndexPage
