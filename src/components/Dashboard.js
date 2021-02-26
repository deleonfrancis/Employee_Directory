import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { filterData, sortData } from "../util/util";
import Jumbotron from "./Jumboton";
import Table from "./Table";
import MobileCards from "./MobileCards";

export default function Dashboard({ employees }) {
  // for responsiveness
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

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
      <main className="d-flex justify-content-center">
        <div class="container">
          {isDesktopOrLaptop && (
            <Table
              sortEmployeesClick={sortEmployeesClick}
              employeeList={employeeList}
            />
          )}
          {isTabletOrMobile && (
            <>
              <MobileCards employeeList={employeeList} onClick={sortEmployeesClick} />
            </>
          )}
        </div>
      </main>
    </div>
  );
}
