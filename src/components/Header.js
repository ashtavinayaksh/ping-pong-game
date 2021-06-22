import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

const headerStyle = {
  "textAlign": "center",
  "color": "white"
};

class Header extends Component {
  render() {
    return (
      <div>
        <h2 style={headerStyle}>Ping Pong Leaderboard</h2>
      </div>
    );
  }
}

export default Header;
