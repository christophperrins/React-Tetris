import React, { Component } from 'react';

export default class TetrisPiece extends Component {

  render() {
    return (
      <div style={{position: 'absolute', 
      display: 'inline-block', 
      border: "1px solid black", 
      backgroundColor: this.props.color, 
      left: this.props.x*this.props.cube + "px", 
      top: this.props.y*this.props.cube + "px",  
      height: this.props.cube-1 +"px", 
      width: this.props.cube-1 + "px"}}/>

    );
  }
}
