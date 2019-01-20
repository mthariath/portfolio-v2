import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { Wrapper } from './Modal.css'
import { FlavorContext } from 'utils'

class Modal extends React.Component {
  constructor(props) {
    super(props)
    if (typeof document !== `undefined`) {
      this.el = document.createElement('div')
    }
  }
  componentDidMount() {
    // The portal element is inserted in the DOM tree after
    // the Modal's children are mounted, meaning that children
    // will be mounted on a detached DOM node. If a child
    // component requires to be attached to the DOM tree
    // immediately when mounted, for example to measure a
    // DOM node, or uses 'autoFocus' in a descendant, add
    // state to Modal and only render the children when Modal
    // is inserted in the DOM tree.
    const modalRoot = document.getElementById('modal-root')
    document.body.style.overflow = 'hidden'
    modalRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    const modalRoot = document.getElementById('modal-root')
    document.body.style.overflow = 'auto'
    modalRoot.removeChild(this.el)
    console.log('nomodal')
  }

  render() {
    const Backdrop = ({ children, toggle, styles }) => (
      <FlavorContext.Consumer>
        {flavor => {
          return (
            <Wrapper
              onClick={toggle}
              onKeyDown={toggle}
              tabIndex="0"
              flavor={flavor}
              style={{
                background: styles.background,
                pointerEvents: styles.pointerEvents,
              }}
            >
              <div>{children}</div>
            </Wrapper>
          )
        }}
      </FlavorContext.Consumer>
    )

    return ReactDOM.createPortal(
      <Backdrop
        style={{ color: 'white' }}
        visible={this.props.visible}
        toggle={this.props.toggle}
        styles={this.props.styles}
      >
        {this.props.children}
      </Backdrop>,
      this.el
    )
  }
}
Modal.propTypes = {
  toggle: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
}

export { Modal }
