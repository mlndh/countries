import React from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import apiData from "./components/apiData";
import Filter from "./components/Filter";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: apiData,
    };
  }
  render() {
    return (
      <React.Fragment> 
        <Header />
        <div className="App">
        <Search />
        <Filter />
      </div>
      </React.Fragment>
    );
  }
}
export default App;
