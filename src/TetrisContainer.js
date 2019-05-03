import React, { Component } from 'react';
import TetrisPiece from './TetrisPiece.js';
import LivePiece from './LivePiece.js';


export default class TetrisContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      blockList: [],
      event: { press: "", num: 0 },
      score: 0,
      highScore: 0,
      speed: 200,
      gameOver: true,
    }

    this.tetrisGame = React.createRef();
  }

  componentWillUpdate = () => {
    let list = this.state.blockList;
    let allYPositions = this.state.blockList.map(block => { return block.y });
    let score = this.state.score;
    let gameOver = allYPositions.filter(yPos => yPos < 0).length > 0;
    let highScore = this.state.score > this.state.highScore ? this.state.score : this.state.highScore;

    if (gameOver) {
      this.setState({
        blockList: [],
        gameOver: true,
        score: 0,
        highScore: highScore
      })
      return
    }

    //for each y position (row), count the number of blocks at that row. 
    for (var i = 0; i < this.props.yBlocks; i++) {
      var count = 0;
      for (var y of allYPositions) {
        if (y === i) {
          count++;
        }
      }

      // if the number of blocks on the row, is equal to the length of the row, remove it from the list.
      // this will run iteratively until all rows are deleted
      if (count === this.props.xBlocks) {
        list = this.removeRowFromList(i, list);
        score += 100;
      }
    }

    // if the number of blocks after removal is different than before then do the following
    if (list.length !== this.state.blockList.length) {
      this.setState({
        blockList: list,
        score: score,
        // speed: 200-score/100
      })
    }
  }

  eventHandle = (event) => {
    let current = this.state.event;
    let newNum = current.num + 1;
    this.setState({
      event: { press: event.keyCode, num: newNum }
    })
  }

  addBlocks = (blocks) => {
    let blockList = this.state.blockList;
    blocks.forEach(element => {
      blockList[blockList.length] = element
    });
    this.setState({
      blockList: blockList
    })
  }

  removeRowFromList = (removeRow, list) => {
    var blockList = list;
    return blockList.filter(block => { return removeRow !== block.y }).map(remainingBlock => { if (remainingBlock.y <= removeRow) { remainingBlock.y += 1 }; return remainingBlock });
  }

  random = () => {
    return Math.random() * 100000
  }

  render() {
    const xBlocks = this.props.xBlocks;
    const yBlocks = this.props.yBlocks;
    const cube = this.props.cube;




    return (
      <div>
        <div style={{ display: 'inline-block', backgroundColor: '#999', width: xBlocks * cube, height: yBlocks * cube }} onKeyDown={this.eventHandle} tabIndex="0" ref={this.tetrisGame}>
          {this.state.gameOver ? <button onClick={() => { this.setState({ gameOver: false }); this.tetrisGame.current.focus(); }}>Play Game</button> : 
          <div>
            {this.state.blockList.map(block => <TetrisPiece key={this.random()} color={block.color} x={block.x} y={block.y} cube={cube} />)}
            <LivePiece speed={this.state.speed} blockList={this.state.blockList} addBlocks={this.addBlocks} xBlocks={xBlocks} yBlocks={yBlocks} cube={cube} event={this.state.event} />
          </div>
          }
        </div>

        <div>
          <button onClick={() => this.setState({gameOver:true})}>end</button>
          <h1>Score: {this.state.score}</h1>
          <h1>High Score: {this.state.highScore}</h1>
        </div>
      </div>
    );
  }
}
