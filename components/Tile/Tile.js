import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TouchableOpacity, } from 'react-native'

class Tile extends Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    tileStyles: PropTypes.shape({
      backgroundColor: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    })
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
