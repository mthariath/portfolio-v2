import React from 'react'
import PropTypes from 'prop-types'
import {
  MediaCard,
  Title,
  Icon,
  TitleBox,
  Chip,
  ChipWrapper,
  Button,
} from 'components'
import { TitleWrapper, TopWrapper, ButtonWrapper } from './ProjectCard.css'
const ProjectCard = ({ project }) => {
  const {
    data: {
      title: { text: title },
      client: { text: client },
      github,
      link,
      technology,
      scope,
      main_image,
    },
  } = project
  return (
    <MediaCard image={main_image.localFile.childImageSharp.fluid} alt={title}>
      <TopWrapper>
        <TitleWrapper>
          <Title sans size={5} as="h1">
            {title}
          </Title>
          <Title sans size={6} as="h1">
            {client}
          </Title>
        </TitleWrapper>
        {link !== null || github !== null ? (
          <ButtonWrapper>
            {link !== null && (
              <Button icon ariaLabel="Live Project Link" href={link.url} noLine>
                <Icon size="medium" icon="link" />
              </Button>
            )}
            {github !== null && (
              <Button icon ariaLabel="Github Repo" href={github.url} noLine>
                <Icon size="medium" icon="github" />
              </Button>
            )}
          </ButtonWrapper>
        ) : (
          undefined
        )}
      </TopWrapper>
      <ChipWrapper>
        {scope.map(s => (
          <Chip margin key={s.scope_item.text}>
            {s.scope_item.text}
          </Chip>
        ))}
      </ChipWrapper>
      <TitleBox title="stack" grid small border>
        {technology.map((tech, i) => (
          <Icon
            icon={tech.technology_item.text}
            key={i}
            caption
            size="medium"
          />
        ))}
      </TitleBox>
    </MediaCard>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
}

export { ProjectCard }
