import { Component } from "react";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Information from "./components/Information";

export default class App extends Component {
  render() {
    return (
      <div id="appContainer">
        <Header />
        <Information />
        <Education />
        <Experience />
      </div>
    );
  }
}