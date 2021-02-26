import React from "react";

export default function Employee({ employee }) {
  return (
    <div className="row border-bottom">
      <div className="col-lg-2">
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
      <div className="col-lg-2 center-text p-0">{employee.firstName}</div>
      <div className="col-lg-2 center-text p-0">{employee.lastName}</div>
      <div className="col-lg-4 center-text p-0">{employee.email}</div>
      <div className="col-lg-2 center-text p-0">{employee.phone}</div>
    </div>
  );
}