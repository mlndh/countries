import React, { Component } from "react";
import jokesData from "./jokesData";
const Searchicon = require("../search.svg");

class Search extends Component {
  constructor() {
    super();

    this.state = {
      search: "asd",
    };
  }
  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword });
  };

  render() {
    // const styleInfo = {
    //   paddingRight: "10px",
    // };
    // const elementStyle = {
    //   border: "none",
    //   borderRadius: "10px",
    //   position: "relative",
    //   left: "10vh",
    //   height: "3vh",
    //   width: "20vh",
    //   marginTop: "5vh",
    //   marginBottom: "10vh",
    // };
    const items = jokesData
      .filter((data) => {
        if (this.state.search == null) return data;
        else if (
          data.name.toLowerCase().includes(this.state.search.toLowerCase()) ||
          data.subregion.toLowerCase().includes(this.state.search.toLowerCase())
        ) {
          return data;
        }
      })
      .map((data) => {
        return (
          <div>
            <div className="flag">
              <img src={data.flag} className="flagImg" alt="flags" />
              <p className="countryname">{data.name}</p>
              <p className="population"> Population: {data.population} </p>
              <p className="Region"> Region: {data.region}</p>
              <p className="Capital"> Capital: {data.capital}</p>
            </div>
          </div>
        );
      });
    return (
      <div className="input">
        <img className="icons" src={Searchicon} />{" "}
        <input
          className="input"
          type="text"
          placeholder="Search for a country..."
          // style={elementStyle}
          onChange={(e) => this.searchSpace(e)}
        />
        <img className="icons" src={Searchicon} />
        {items}
      </div>
    );
  }
}
export default Search;
