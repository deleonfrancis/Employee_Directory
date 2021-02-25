import React, { useState } from "react";
import { filterData, sortData } from "../util/util";
import Employee from "./Employee";
import Jumbotron from "./Jumboton";
import TableHeader from "./TableHeader";

export default function Table({ employees }) {
  // internal state
  const [employeeList, setEmployeeList] = useState(employees);

  // Function that handles sorting
  const sortEmployeesClick = (sortBy) => {
    const employeesCopy = [...employees];
    const sortedList = sortData(employeesCopy, sortBy);
    setEmployeeList(sortedList);
  };

  // Function that handles the onFilterClick
  const onFilterClick = (searchValue) => {
    const employeesCopy = [...employees];
    const filteredList = filterData(employeesCopy, searchValue);
    setEmployeeList(filteredList);
  };

  // Function that handles the onClearClick
  const onClearClick = () => {
    setEmployeeList(employees);
  };

  return (
    <div>
      <Jumbotron onFilterClick={onFilterClick} onClearClick={onClearClick} />
      <table className="table">
        <TableHeader onClick={sortEmployeesClick} />
        <tbody>
          {employeeList.map((employee) => (
            <Employee employee={employee} key={employee.guid} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
