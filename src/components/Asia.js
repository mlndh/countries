import React from "react";
import Flags from "./Flags";
import apiData from ".//apiData";
class Asia extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: apiData,
    };
  }
  render() {
    const countryComponent = this.state.todos.map((item) => (
      <Flags key={item.name} item={item} />
    ));
    let filterCountry = countryComponent.filter(function (e) {
      return e.props.item.region === "Asia";
    });
    return (
      <div>
        {filterCountry}
      </div>
    );
  }
}
export default Asia;
