import React from 'react'
import PropTypes from 'prop-types'
import { MediaCard, Title, Icon, TitleBox, Chip, ChipWrapper } from 'components'
import { TitleWrapper } from './ProjectCard.css'
const ProjectCard = ({ project }) => {
  const {
    data: {
      title: { text: title },
      client: { text: client },
      technology,
      scope,
      main_image,
    },
  } = project
  console.log(technology)
  return (
    <MediaCard image={main_image.localFile.childImageSharp.fluid} alt={title}>
      <TitleWrapper>
        <Title sans size={5} as="h1">
          {title}
        </Title>
        <Title sans size={6} as="h1">
          {client}
        </Title>
      </TitleWrapper>
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
