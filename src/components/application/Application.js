import React, { Component } from "react";

import Header from "../application/Header";
import Content from "../application/Content";
import Footer from "../application/Footer";

class Application extends Component {
  render() {
    return (
      <div className="App bg-dark text-white">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default Application;
