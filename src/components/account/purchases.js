import React, { Component } from "react";

class Purchases extends Component {
  render() {
    const { className } = this.props;

    return <div className={`${className}purchases`}>purchases goes here</div>;
  }
}

export default Purchases;
