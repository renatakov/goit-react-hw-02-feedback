import "./App.css";
import React, { Component } from "react";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Notification from "./components/Notification";
import Section from "./components/Section";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  andleVote = (option) => {
    this.setState((prevState) => ({ [option]: prevState[option] + 1 }));
  };

  constTotal = () => {
    return this.state.bad + this.state.good + this.state.neutral;
  };

  countGoodPercentage = () => {
    return Math.ceil((this.state.good / this.constTotal()) * 100)
  }

  render() {
    const options = ["good", "neutral", "bad"];

    return (
      <>
        <FeedbackOptions options={options} andleVote={this.andleVote}/>
        <Statistics
          good={this.state.good}
          neutral={this.state.bad}
          bad={this.state.neutral}
          total={this.constTotal()}
          countGoodPercentage={this.countGoodPercentage()}
        />
        <Notification message="No feedback yet" />
      </>
    );
  }
}

export default App;
