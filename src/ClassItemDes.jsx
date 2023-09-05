import React, { Component } from "react";

class ClassItemDes extends Component {
  styles = {
    color: "teal",
    fontSize: "18px",
  };
  render() {
    return (
      <div>
        <h1 style={this.styles}>{this.props.name}</h1>
        <p>
          <i>{this.props.description}</i>
        </p>
      </div>
    );
  }
}

export default ClassItemDes;
