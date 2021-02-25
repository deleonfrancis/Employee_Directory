import React, { useState } from "react";

// Card for Search Bar and Buttons to Clear and Filter
export default function Filter({ onClearClick, onFilterClick }) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="col-lg-12 d-flex justify-content-center">
      <div className="input-group mb-3 w-50">
        <input
          onChange={(event) => setSearchValue(event.target.value)}
          value={searchValue}
          type="text"
          className="form-control"
          placeholder="Filter by name, email, or phone number"
          ariaLabel="Filter by name, email, or phone number"
        />
        <div className="input-group-append">
          <button
            onClick={() => {
              setSearchValue("");
              onClearClick();
            }}
            className="btn btn-outline-danger"
            type="button"
          >
            Clear
          </button>
          <button
            onClick={() => onFilterClick(searchValue)}
            className="btn btn-outline-primary"
            type="button"
          >
            Filter
          </button>
        </div>
      </div>
    </div>
  );
}
