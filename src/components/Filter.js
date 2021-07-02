import React, { useState } from "react";

// Card for Search Bar and Buttons to Clear and Filter
export default function Filter({ onClearClick, onFilterClick }) {
  const [searchValue, setSearchValue] = useState("");

  if (searchValue === ""){
    onClearClick()
  } 

  return (
    <div className="d-flex justify-content-center">
      <div className="input-group col-lg-8 col-md-10 col-sm-12 mb-3">
        <input
          onChange={(event) => {setSearchValue(event.target.value)
          onFilterClick(searchValue)}}
          value={searchValue}
          type="text"
          className="form-control"
          placeholder="Filter by name, email, or phone number"
          ariaLabel="Filter by name, email, or phone number"
        />
      </div>
    </div>
  );
}
