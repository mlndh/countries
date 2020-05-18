import React from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Flags from "./components/Flags";
import jokesData from "./components/jokesData";
import Card from "./components/Card";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: jokesData,
    };
  }
  render() {
    const countryComponent = this.state.todos.map((item) => (
      <Flags key={item.name} item={item} />
    ));
    return (
      <div className="App">
 
        <Header />
        <Search />
        <Card />

        {/* {countryComponent} */}
        {/* {filterCountry} */}
      </div>
    );
  }
}

export default App;
