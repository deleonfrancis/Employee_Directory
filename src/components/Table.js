import React from "react";
import { filterData, sortData } from "../util/util";
import Employee from "./Employee";

export default function Table({ employees }) {
//   console.log(filterData(employees, "("));
const employeesCopy = [...employees]
console.log(sortData(employeesCopy, "name"));
  return (
    <div>
      <table>
        {employees.map((employee) => (
          <Employee employee={employee} key={employee.guid} />
        ))}
      </table>
    </div>
  );
}
