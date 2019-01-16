import { Component } from "react";
import PropTypes from "prop-types";

class Toggle extends Component {
  state = {
    visible: false
  };

  handleToggle = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  render() {
    const { children } = this.props;
    return children({
      visible: this.state.visible,
      toggle: this.handleToggle
    });
  }
}

Toggle.propTypes = {
  children: PropTypes.func.isRequired
};

export { Toggle };
