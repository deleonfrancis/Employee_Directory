import React from "react";
import Modal from "./Modal";


export default function Employee({ employee }) {

  return (
    <tr>
      <td className="align-middle">
        <button type="button" class="btn btn-outline" data-toggle="modal" data-target="#exampleModalCenter">
          <img
            src={employee.picture}
            alt={`${employee.firstName} img`}
            className="img-thumbnail rounded-circle"
          />
        </button>
        <Modal />
      </td>

      <td className="align-middle">{employee.firstName}</td>
      <td className="align-middle">{employee.lastName}</td>
      <td className="align-middle">{employee.email}</td>
      <td className="align-middle">{employee.phone}</td>
    </tr>
  );
}
