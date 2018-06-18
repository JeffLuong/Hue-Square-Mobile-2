import Tile from './Tile';
import { defaultTileStyles } from './styles';
import React from 'react';

const createTileComponent = function(tileObj = {}, key) {
  const { styles } = tileObj;
  const tileStyles = styles ? styles : defaultTileStyles;
  return <Tile tileStyles={tileStyles} key={key}></Tile>;
}

export { createTileComponent };
export default Tile;
