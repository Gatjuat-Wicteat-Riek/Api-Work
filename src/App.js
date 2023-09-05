import React, { Component } from "react";
import "./App.css";
import PracticeMore from "./PracticeMore";
import Products from "./Products";
import ClassItemDes from "./ClassItemDes";
import JokeMade from "./JokeMade";
import CounterOneTwo from "./CounterOneTwo";
import Request from "./api/Request";
import AgeApi from "./api/AgeApi";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Request /> */}
        <AgeApi />
        {/* <CounterOneTwo /> */}
        {/* <JokeMade /> */}
        {/* <Products
          name="Google"
          description="Ai assistant which will assist you"
          price="390.8"
        />
        <Products
          name="Iphone 12 pro"
          description="The best phone"
          price="1500"
        />
        <Products
          name="Mac pro"
          description="laptop in the market"
          price="2500"
        /> */}
        {/* <PracticeMore /> */}
      </div>
    );
  }
}

export default App;
