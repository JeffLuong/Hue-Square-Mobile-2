import React, { Component } from 'react';
import { View } from 'react-native';
import Tile, { createTileComponent } from '../../components/Tile/index';
import { generateTileStyles } from '../../components/Tile/styles';
import PropTypes from 'prop-types';

function generateRowOfTiles(tiles) {
  return tiles.map((tile, idx) => createTileComponent(tile, idx));
}

class Row extends Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    tiles: PropTypes.array.isRequired
  }

  render() {
    const rowOfTiles = generateRowOfTiles(this.props.tiles);

    return (
      <View>
        {rowOfTiles}
      </View>
    );
  }
}

export default Row;
