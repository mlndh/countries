import React, { Component } from "react";
import Africa from "./Africa";
import Asia from "./Asia";
import America from "./America";
import Europe from "./Europe";
import Oceania from "./Oceania";
import { Route, NavLink, BrowserRouter } from "react-router-dom";

// const Arrowicon = require("../angle-down.svg");

class Filter extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();
    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }

  render() {
    return (
      <div className="filter">
        {" "}
        <button className="filter-button" onClick={this.showMenu}>
          Filter by region 
          {/* <img className="icons" src={Arrowicon} alt="arrow" /> */}
        </button>
        {this.state.showMenu ? (
          <div
            className="filter"
            ref={(element) => {
              this.dropdownMenu = element;
            }}
          >
            <BrowserRouter>
              <ul className="links">
                <li>
                  <NavLink exact to="/">
                    Reset
                  </NavLink>{" "}
                </li>
                <li>
                  <NavLink to="/africa">Africa</NavLink>
                </li>
                <li>
                  <NavLink to="/asia">Asia</NavLink>
                </li>
                <li>
                  <NavLink to="/america">America</NavLink>
                </li>
                <li>
                  <NavLink to="/europe">Europe</NavLink>
                </li>
                <li>
                  <NavLink to="/oceania">Oceania</NavLink>
                </li>
              </ul>
              <div className="routes">
                <Route path="/africa" component={Africa} />
                <Route path="/asia" component={Asia} />
                <Route path="/america" component={America} />
                <Route path="/europe" component={Europe} />
                <Route path="/oceania" component={Oceania} />
              </div>
            
            </BrowserRouter>
          </div>
        ) : null}
      </div>
    );
  }
}
export default Filter;
