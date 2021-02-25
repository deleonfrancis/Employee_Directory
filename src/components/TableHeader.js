import React from "react";
import SortButton from "./SortButton";

export default function TableHeader({ onClick }) {
  return (
    <thead>
      <tr>
        <th>
          <SortButton text="Picture" onClick={() => {}} />
        </th>
        <th>
          <SortButton
            text="First Name"
            sortField="firstName"
            onClick={onClick}
          />
        </th>
        <th>
          <SortButton text="Last Name" sortField="lastName" onClick={onClick} />
        </th>
        <th>
          <SortButton text="Email" sortField="email" onClick={onClick} />
        </th>
        <th>
          <SortButton text="Phone Number" sortField="phone" onClick={onClick} />
        </th>
      </tr>
    </thead>
  );
}
