import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import {
  Layout,
  ArticleGrid,
  SEO,
  TitleBox,
  Title,
  Icon,
  IconGrid,
} from '../components/'

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StyledTitle = ({ children }) => (
  <Title style={{ padding: '1.5rem 0 0' }} size={5} underline>
    {children}
  </Title>
)

const AboutPage = ({ data, location }) => {
  const {
    prismicAbout: {
      data: {
        title: { text: title },
        subtitle: { text: subtitle },
        first_text: { html: first_text },
        second_text: { html: second_text },
        skills,
        tools,
        todos,
      },
    },
  } = data
  return (
    <Layout location={location.pathname}>
      <SEO title="About Me" keywords={[`gatsby`, `application`, `react`]} />
      <ArticleGrid title={title} subtitle={subtitle}>
        <div dangerouslySetInnerHTML={{ __html: first_text }} />
        <TitleBox>
          <IconWrapper>
            <StyledTitle>skills</StyledTitle>
            <IconGrid>
              {skills.map((skill, i) => (
                <Icon icon={skill.skill} key={i} caption size="medium" />
              ))}
            </IconGrid>
            <StyledTitle>tools</StyledTitle>
            <IconGrid>
              {tools.map((tool, i) => (
                <Icon icon={tool.tool} key={i} caption size="medium" />
              ))}
            </IconGrid>
            {/* eslint-disable-next-line*/}
            <StyledTitle>/* todo */</StyledTitle>
            <IconGrid>
              {todos.map((todo, i) => (
                <Icon icon={todo.todo} key={i} caption size="medium" />
              ))}
            </IconGrid>
          </IconWrapper>
        </TitleBox>
        <div dangerouslySetInnerHTML={{ __html: second_text }} />
      </ArticleGrid>
    </Layout>
  )
}

AboutPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default AboutPage

export const query = graphql`
  query AboutPageQuery {
    prismicAbout {
      data {
        title {
          text
        }
        subtitle {
          text
        }
        first_text {
          html
        }
        second_text {
          html
        }
        skills {
          skill
        }
        tools {
          tool
        }
        todos {
          todo
        }
      }
    }
  }
`
