import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import { FlavorContext } from 'utils'
import { Title, Paragraph, Chip, ChipWrapper, Button } from 'components'
import {
  Wrapper,
  DescriptionBox,
  ButtonWrapper,
} from './PortfolioPageListing.css'
const PortfolioPageListing = ({ project, style }) => {
  const {
    uid,
    data: {
      title: { text: title },
      main_image,
      snippet,
      scope,
    },
  } = project
  return (
    <FlavorContext.Consumer>
      {flavor => {
        return (
          <Wrapper style={style}>
            <Link to={`/work/${uid}`}>
              <Img
                fluid={{
                  ...main_image.localFile.childImageSharp.fluid,
                  aspectRatio: 1.618 / 1,
                }}
                alt={title}
              />
            </Link>
            <DescriptionBox flavor={flavor}>
              <Title sans size={6} as="h3">
                {title}
              </Title>
              <Paragraph small>{snippet}</Paragraph>
              <ChipWrapper>
                {scope.map(s => (
                  <Chip margin key={s.scope_item.text}>
                    {s.scope_item.text}
                  </Chip>
                ))}
              </ChipWrapper>
              <ButtonWrapper>
                <Button to={`/work/${uid}`}>Read More</Button>
              </ButtonWrapper>
            </DescriptionBox>
          </Wrapper>
        )
      }}
    </FlavorContext.Consumer>
  )
}

PortfolioPageListing.propTypes = {
  project: PropTypes.object.isRequired,
  style: PropTypes.object,
}
export { PortfolioPageListing }
