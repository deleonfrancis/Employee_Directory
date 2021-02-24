import React, { useEffect } from "react";
import Employee from "./Employee";

export default function Table({ employees }) {
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


