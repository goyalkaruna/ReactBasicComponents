import React, { Component } from "react";
class ProgressBar extends Component {
  state = { width: 15 };
  render() {
    return (
      <div>
        <div
          onClick={this.incrementBar}
          style={{
            width: this.state.width + "%",
            height: 15 + "px",
            backgroundColor: "brown"
          }}
        />
      </div>
    );
  }
  incrementBar = () => {
    setInterval(function() {
      for (let index = 1; index <= 100; index++) {
        // this.setState({ width: index + "%" });
        console.log("f");
      }
    }, 40);
    // this.setState({ width: 5 + "%" });
  };
}

export default ProgressBar;
