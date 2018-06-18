import React, { Component } from 'react';
import { TouchableOpacity, LayoutAnimation } from 'react-native';
import PropTypes from 'prop-types';

class Tile extends Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    tileStyles: PropTypes.shape({
      backgroundColor: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }).isRequired
  }

  getDerivedStateFromProps() {
    LayoutAnimation.spring();
  }

  render() {
    const { tileStyles } = this.props;

    return (
      <TouchableOpacity
        style={tileStyles}>
      </TouchableOpacity>
    )
  }
}

export default Tile;
