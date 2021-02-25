import React from "react";
import SortButton from "./SortButton";

export default function TableHeader({ onClick }) {
  return (
    <thead>
      <tr>
        <th className="pl-2">
          <SortButton text="" onClick={() => {}} />
        </th>
        <th className="pl-2">
          <SortButton
            text="First Name"
            sortField="firstName"
            onClick={onClick}
          />
        </th>
        <th className="pl-2">
          <SortButton text="Last Name" sortField="lastName" onClick={onClick} />
        </th>
        <th className="pl-2">
          <SortButton text="Email" sortField="email" onClick={onClick} />
        </th>
        <th className="pl-2">
          <SortButton text="Phone Number" sortField="phone" onClick={onClick} />
        </th>
      </tr>
    </thead>
  );
}
