import React from "react";
import Filter from "./Filter";

export default function Jumboton({onFilterClick, onClearClick}) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Employee Directory</h1>
        <p className="lead">
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
      </div>
      <Filter onFilterClick={onFilterClick} onClearClick={onClearClick} />
    </div>
  );
}
