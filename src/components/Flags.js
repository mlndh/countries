import React from "react";

function Flags(props) {
  return (
    <div className="Flags">
      <div className="flag">
        <img src={props.item.flag} className="flagImg" alt="flags" />
        <p className="countryname">{props.item.name}</p>
        <p className="population"> Population: {props.item.population} </p>
        <p className="Region"> Region: {props.item.region}</p>
        <p className="Capital"> Capital: {props.item.capital}</p>
      </div>
    </div>
  );
}

export default Flags;
