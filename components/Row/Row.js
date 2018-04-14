import React, { Component } from 'react';
import { View } from 'react-native';
import Tile from '../../components/Tile/index';
import { generateTileStyles } from '../../components/Tile/styles';

class Row extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Tile tileStyles={generateTileStyles()}></Tile>
        <Tile tileStyles={generateTileStyles()}></Tile>
        <Tile tileStyles={generateTileStyles()}></Tile>
      </View>
    )
  }
};

export default Row;
