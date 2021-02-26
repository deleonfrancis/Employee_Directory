import React from "react";
import Employee from "./Employee";
import TableHeader from "./TableHeader";

export default function Table({sortEmployeesClick, employeeList}) {
  return (
    <>
      <TableHeader onClick={sortEmployeesClick} />
      <div class="container">
        {employeeList.map((employee) => (
          <Employee employee={employee} key={employee.guid} />
        ))}
      </div>
    </>
  );
}
