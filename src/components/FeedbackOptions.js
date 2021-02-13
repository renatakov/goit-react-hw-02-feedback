import React, { Component } from "react";

class Feedback extends Component {
  render() {
    return(
      <div>
     {this.props.options.map((option) => <button type="button" onClick={() => this.props.andleVote(option)}>{option}</button>)}
      </div>
    )
  }
}

export default Feedback;