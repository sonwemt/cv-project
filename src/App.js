import { Component } from "react";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Information from "./components/Information";

export default class App extends Component {
  render() {
    return (
      <div id="appContainer">
        <h1 id="mainHeader">CV Form</h1>
        <Information />
        <Education />
        <Experience />
      </div>
    );
  }
}