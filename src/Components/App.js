import React, { Component } from "react";
import Router from "Components/Router";
import GrobalStyles from "Components/GlobalStyles";

class App extends Component {
  render() {
    return (
      <>
        <Router />
        <GrobalStyles />
      </>
    );
  }
}

export default App;
