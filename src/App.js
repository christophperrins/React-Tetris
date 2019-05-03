import React, { Component } from 'react';
import TetrisContainer from './TetrisContainer.js'

export default class App extends Component {

  render() {
    return (
      <div>
        <TetrisContainer xBlocks={12} yBlocks={25} cube={15}/>
      </div>
    );
  }
}
