import React from "react";
import Filter from "./Filter";

export default function Jumboton({onFilterClick, onClearClick}) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Employee Directory</h1>
        <p className="lead">
        View your entire employee directory. Sort or filter by name, email, or phone number.
        </p>
      </div>
      <Filter onFilterClick={onFilterClick} onClearClick={onClearClick} />
    </div>
  );
}
