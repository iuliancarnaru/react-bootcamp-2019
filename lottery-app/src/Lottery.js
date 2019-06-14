import React, { Component } from "react";
import uuidv4 from 'uuid/v4'
import Ball from "./Ball";

class Ticket extends Component {
  static defaultProps = {
    title: "Lotto",
    maxBalls: 6,
    maxNum: 40
  };

  constructor(props) {
    super(props);
    this.state = {
      nums: Array.from({ length: this.props.maxBalls })
    };
  }

  generate = () => {
    // this.setState(prevState => ({
    //   nums: prevState.nums.map(
    //     random => Math.floor(Math.random() * this.props.maxNum) + 1
    //   )
    // }));
  };

  handleClick = () => {
    this.generate();
  };

  render() {
    return (
      <div className="lottery">
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map(number => (
            <Ball key={uuidv4()} number={number} />
          ))}
        </div>
        <button className="button" onClick={this.handleClick}>Generate</button>
      </div>
    );
  }
}

export default Ticket;
