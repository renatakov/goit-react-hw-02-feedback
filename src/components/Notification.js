import React, { Component } from "react";

class Notification extends Component {
render() {
  return(
    <h1>{this.props.message}</h1>
  )
}
}

export default Notification;