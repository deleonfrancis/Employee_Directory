import React from "react";

export default function CardEmployee({employee}) {
    console.log(employee);
  return (
    <div className="card mb-4" style={{width: "18rem"}}>
      <img className="card-img-top" src={employee.lgPicture} alt={`${employee.firstName} pic`} />
      <div className="card-body">
        <h5 className="card-title">{`${employee.firstName} ${employee.lastName}`}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{employee.email}</li>
        <li className="list-group-item">{employee.phone}</li>
      </ul>
    </div>
  );
}
