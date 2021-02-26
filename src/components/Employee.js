import React from "react";
// import Modal from "./Modal";


export default function Employee({ employee }) {
  return (
    <div className="row">
      <div className="col">
        <button
          type="button"
          className="btn btn-outline"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          <img
            src={employee.picture}
            alt={`${employee.firstName} img`}
            className="img-thumbnail rounded-circle"
          />
        </button>
      </div>
      <div className="col center-text p-0">{employee.firstName}</div>
      <div className="col center-text p-0">{employee.lastName}</div>
      <div className="col center-text p-0">{employee.email}</div>
      <div className="col center-text p-0">{employee.phone}</div>
    </div>
  );
}
// <tr>
//   <td className="align-middle">
//     <button type="button" class="btn btn-outline" data-toggle="modal" data-target="#exampleModalCenter">
//       <img
//         src={employee.picture}
//         alt={`${employee.firstName} img`}
//         className="img-thumbnail rounded-circle"
//       />
//     </button>
//     <Modal />
//   </td>

//   <td className="align-middle">{employee.firstName}</td>
//   <td className="align-middle">{employee.lastName}</td>
//   <td className="align-middle">{employee.email}</td>
//   <td className="align-middle">{employee.phone}</td>
// </tr>
