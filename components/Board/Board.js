import React, { Component } from 'react';
import Row from '../../components/Row/index';
import { Text } from 'react-native';

class Board extends Component {

  constructor(props) {
    super(props);
  }

  // static propTypes = {
  //   tileStyles: PropTypes.shape({
  //     backgroundColor: PropTypes.string.isRequired,
  //     width: PropTypes.number.isRequired,
  //     height: PropTypes.number.isRequired,
  //   })
  // }

  // getDerivedStateFromProps() {
  //   LayoutAnimation.spring();
  // }

  render() {
    return (
      <Row></Row>
    )
  }
}

export default Board;
