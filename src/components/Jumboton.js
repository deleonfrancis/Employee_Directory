import React from "react";
import Filter from "./Filter";

// Card for Jumbotron
export default function Jumboton({onFilterClick, onClearClick}) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4 mb-3">Employee Directory</h1> 
        <p className="lead mb-1">
        View your entire employee directory. Sort or filter by name, email, or phone number.
        </p>
        <p className="lead mb-5">
        Click on desired field to filter.
        </p>
      </div>
      {/* Search Bar with Buttons */}
      <Filter onFilterClick={onFilterClick} onClearClick={onClearClick} />
    </div>
  );
}
