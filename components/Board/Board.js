import React, { Component } from 'react';
import { View } from 'react-native';
import Row from '../../components/Row/index';

const testTiles = [
  {
    styles: {
      backgroundColor: 'red',
      width: 100,
      height: 100
    },
  }, {
    styles: {
      backgroundColor: 'blue',
      width: 100,
      height: 100
    },
  }, {
    styles: {
      backgroundColor: 'green',
      width: 100,
      height: 100
    }
  }
];

const testTiles2 = [
  {
    styles: {
      backgroundColor: 'red',
      width: 100,
      height: 100
    },
  }, {
    styles: {
      backgroundColor: 'blue',
      width: 100,
      height: 100
    },
  }, {
    styles: {
      backgroundColor: 'green',
      width: 100,
      height: 100
    }
  }
];

const testRows = [testTiles, testTiles2];

function createRowComponent(rowOfTiles, idx) {
  return <Row tiles={rowOfTiles} key={idx}></Row>
}

function generateRowsForBoard() {
  return testRows.map((rowOfTiles, idx) => createRowComponent(rowOfTiles, idx))
}

class Board extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const boardRows = generateRowsForBoard();
    return (
      <View>
        {boardRows}
      </View>
    )
  }
}

export default Board;
