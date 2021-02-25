import React from "react";

export default function Employee({ employee }) {
  return (
    <tr>
      <td className="align-middle">
        <img
          src={employee.picture}
          alt={`${employee.firstName} img`}
          className="img-thumbnail rounded-circle"
        />
      </td>

      <td className="align-middle">{employee.firstName}</td>
      <td className="align-middle">{employee.lastName}</td>
      <td className="align-middle">{employee.email}</td>
      <td className="align-middle">{employee.phone}</td>
    </tr>
  );
}
