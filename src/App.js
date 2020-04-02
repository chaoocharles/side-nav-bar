import React, { Component } from "react";
import NavBar from "./components/layout/NavBar";
import SideNavBar from "./components/layout/SideNavBar";
import BackDrop from "./components/layout/BackDrop";

class App extends Component {
  state = {
    sideBarOpen: false
  };

  handleOpen = () => {
    this.setState({
      sideBarOpen: true
    });
  };

  handleClose = () => {
    this.setState({
      sideBarOpen: false
    });
  };

  render() {
    return (
      <div>
        <NavBar open={this.handleOpen} />
        {this.state.sideBarOpen ? (
          <div>
            <BackDrop close={this.handleClose} />{" "}
          </div>
        ) : null}
        <SideNavBar close={this.handleClose} display={this.state.sideBarOpen} />
        <div style={{ marginTop: "70px", marginLeft: "9px" }}>
          <h3>Hello React Devs...</h3>
        </div>
      </div>
    );
  }
}

export default App;
