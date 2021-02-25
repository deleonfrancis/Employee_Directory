import React from "react";

export default function SortButton({ text, sortField, onClick }) {
  return (
    <button type="button" className="btn btn-outline p-0">
      <span className="font-weight-bold" onClick={() => onClick(sortField)}>
        {text}
        {/* <span>
          <i class="fas fa-sort-down"></i>
        </span> */}
      </span>
    </button>
  );
}
