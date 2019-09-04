import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Application from "./components/application/Application";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Application />
      </BrowserRouter>
    );
  }
}

export default App;
