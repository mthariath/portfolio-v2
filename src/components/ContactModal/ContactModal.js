import React from 'react'
import { Transition, config } from 'react-spring'

import { TitleBox, Modal, Button, Paragraph } from 'components'
import { ButtonWrapper, ContentWrapper } from './ContactModal.css'

const ModalWrapper = ({ visible, children, ...props }) => (
  <Transition
    items={visible}
    config={config.wobbly}
    from={{
      opacity: 0,
      pointerEvents: 'none',
      contentY: 'translateY(150px)',
      descY: '-150',
      descOpacity: 0,
      background: 'rgba(0, 0, 0, 0)',
    }}
    enter={{
      opacity: 1,
      pointerEvents: 'auto',
      contentY: '0',
      descY: '-150',
      descOpacity: 0,
      background: 'rgba(0, 0, 0, 0.3)',
    }}
    leave={{
      opacity: 0,
      pointerEvents: 'none',
      contentY: 'translateY(0px)',
      descY: '-150',
      descOpacity: 0,
      background: 'rgba(0, 0, 0, 0)',
    }}
  >
    {props => children(props)}
  </Transition>
)

const ContactModal = ({ toggle, visible }) => {
  const ModalContent = styles => {
    return (
      <Modal styles={styles} toggle={toggle} visible={visible}>
        <ButtonWrapper
          style={{
            opacity: styles.opacity,
          }}
        >
          <Button large shadow>
            [close]
          </Button>
        </ButtonWrapper>
        <ContentWrapper
          style={{
            opacity: styles.opacity,
            transform: styles.contentY,
          }}
        >
          <TitleBox title="contact me" onClick={e => e.stopPropagation()}>
            <Paragraph Center>
              Interested in working with me?
              <br />
              <Paragraph Span Small>
                Feel free to contact me through any of the channels below.
              </Paragraph>
            </Paragraph>

            <Paragraph Center>
              email: <a href="mailto:mike@thariath.com">mike@thariath.com</a>
              <br />
              phone: <a href="tel:2246232760">224-623-2760</a>
              <br />
              LinkedIn:{' '}
              <a
                href="https://www.linkedin.com/in/thariath/"
                rel="noopener noreferrer"
                target="_blank"
              >
                linkedin.com/in/thariath/
              </a>
              <br />
              Github:{' '}
              <a
                href="https://www.github.com/mthariath"
                rel="noopener noreferrer"
                target="_blank"
              >
                github.com/mthariath
              </a>
            </Paragraph>
          </TitleBox>
        </ContentWrapper>
      </Modal>
    )
  }
  return (
    <ModalWrapper native visible={visible}>
      {visible => visible && ModalContent}
    </ModalWrapper>
  )
}

export { ContactModal }
