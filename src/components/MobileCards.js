import React from "react";
import CardEmployee from "./CardEmployee";
import SortButton from "./SortButton";

export default function MobileCards({ employeeList, onClick }) {
  return (
    <>
      <div className="d-flex justify-content-around mb-4">
        <SortButton
          className=""
          text="sort by First Name"
          sortField="firstName"
          onClick={onClick}
        />
        <SortButton
          className=""
          text="sort by Last Name"
          sortField="lastName"
          onClick={onClick}
        />
        <SortButton
          className=""
          text="sort by Email"
          sortField="email"
          onClick={onClick}
        />
        <SortButton
          className=""
          text="sort by Phone Number"
          sortField="email"
          onClick={onClick}
        />
      </div>

      <div class="container d-flex flex-wrap">
        {employeeList.map((employee) => (
          <CardEmployee employee={employee} key={employee.guid} />
        ))}
      </div>
    </>
  );
}
