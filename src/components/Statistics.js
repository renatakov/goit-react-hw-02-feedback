import React, { Component } from "react";

class Statistics extends Component {
  render() {
    return (
      <>
        <h1> Good: {this.props.good} </h1>
        <h1> Bad: {this.props.bad} </h1>
        <h1> Neutral: {this.props.neutral} </h1>
        <h1> Total: {this.props.total} </h1>
        <h1>Good percentage: {this.props.countGoodPercentage} %</h1>
      </>
    );
  }
}

export default Statistics;
