import React from "react";
import { sortData } from "../util/util";
import Employee from "./Employee";
import Jumbotron from "./Jumboton"

export default function Table({ employees }) {
//   console.log(filterData(employees, "("));
const employeesCopy = [...employees]
console.log(sortData(employeesCopy, "name"));
  return (
    <div>
    <Jumbotron />
      <table>
        {employees.map((employee) => (
          <Employee employee={employee} key={employee.guid} />
        ))}
      </table>
    </div>
  );
}
