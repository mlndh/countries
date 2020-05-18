import React from "react";
import Flags from "./Flags";
import jokesData from ".//jokesData";
import Card from "./Card";
class America extends React.Component {
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

    //console.log(countryComponent);
    let filterCountry = countryComponent.filter(function (e) {
      return e.props.item.region === "Americas";
    });
    // console.log(filterCountry);
    return (
      <div>
        <Card />

        {filterCountry}
      </div>
    );
  }
}
export default America;
