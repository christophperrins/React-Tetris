import React, { Component } from 'react';
import TetrisPiece from './TetrisPiece.js';
import {shapes} from './shapes.js';

export default class LivePiece extends Component {
  constructor(props){
    super(props)

    this.state= {
      playerBlockList: [],
      moveFunction: setInterval(() => {
        this.moveBlock(0,1)
      }, this.props.speed),
      num: 0,
      speed: this.props.speed
    }

  }

  //lifecycle to be removed if started with an onclick function
  componentDidMount = () => {
    this.makeBlock();
  }
  
  componentWillUnmount = () => {
    let move = this.state.moveFunction;
    clearInterval(move);
  }

  componentWillUpdate = (x) => {
    if (this.state.num < x.event.num) {

      if (x.event.press === 65) {
        this.moveBlock(-1,0);
      }
      if (x.event.press === 68) {
        this.moveBlock(1,0);
      }
      if (x.event.press === 87) {
        this.rotate(1);
      }
      if (x.event.press === 83) {
        this.rotate(-1);
      }
    // comment for fun
    this.state.num = x.event.num

    if (this.state.speed !== x.speed){
      clearInterval(this.state.moveFunction);
      this.setState({
        speed: x.speed,
        moveFunction: setInterval(() => {
          this.moveBlock(0,1)
        }, x.speed)
      })
    }
  }
    
  }

  addBlocks = (blocks) => {
    this.props.addBlocks(blocks)
  }

 
  makeBlock = () => {
    let originX = parseInt(this.props.xBlocks/2);
    let originY = -2;

    let shape = shapes(originX, originY);
    let shapeNum = parseInt(Math.random()*7)
    let orientation = 0
    let blocks = shape[shapeNum][orientation]
    

    this.setState ({
      playerBlockList: blocks,
      currentType: shapeNum,
      orientation: orientation
    })
    
  }

  newOrientation = (orientation, rotate) => {
    if (orientation === 3 && rotate === 1) {
      orientation = 0
    } else if (orientation === 0 && rotate === -1){
      orientation = 3
    } else {
      orientation += rotate;
    }
    return orientation
  } 

  rotate = (rotate) => {
    let orientation = this.state.orientation
    
    orientation = this.newOrientation(orientation, rotate);

    let originBlockList = this.state.playerBlockList
    let originBlock = originBlockList[0]

    let originX = originBlock.x;
    let originY = originBlock.y;
    
    let shape = shapes(originX, originY)

    let blockList = shape[this.state.currentType][orientation];
    
    // IF ROTATE CAUSES COLLISION SAY NO!
    for (let block of blockList) {
      if (block.x < 0 || block.x > this.props.xBlocks - 1) {
        return
      }

      for (let staleBlock of this.props.blockList) {
        if (block.x === staleBlock.x && block.y === staleBlock.y) {
          return
        }
      }
    }

    this.setState({
      playerBlockList: blockList,
      orientation: orientation,
     })
  }


  moveBlock = (x, y) => {
    let blockList = this.state.playerBlockList;
    // set width of movement
    for (let block of blockList) {
      if (block.x +x < 0 || block.x + x > this.props.xBlocks-1){
        return
      }
    }

    let collision = false;
    for (let block of blockList) {
      if (block.y + y > this.props.yBlocks-1) {
        collision= true;
      }
    }

    if (x !== 0) {
      // after move is hit then return
      for (let block of blockList) {
        for (let staleBlock of this.props.blockList) {
          if (block.x +x === staleBlock.x && block.y === staleBlock.y) {
            return  
          }
        }
      }

    }


    for (let block of blockList) {
      for (let staleBlock of this.props.blockList) {
        if (block.x === staleBlock.x && block.y + y === staleBlock.y) {
          collision = true;
        }
      }
    }

    if (collision) {
      this.props.addBlocks(blockList);
      this.makeBlock();
    }
    else if (blockList.length !== 0) {
      for (let block of blockList) {
        block.x += x;
        block.y += y;
      }
      this.setState({
        playerBlockList: blockList
      })
    }    
  }

  random = () => {
    return Math.random() * 100000
  }


  render() {
    
    return (
      <div onKeyPress={this.playerAction}>
         <div id="playerPiece">
          {this.state.playerBlockList.map(block => <TetrisPiece key={this.random()} color={block.color} x={block.x} y={block.y} cube={this.props.cube}/>)} 
        </div>
      </div>
    );
  }
}
