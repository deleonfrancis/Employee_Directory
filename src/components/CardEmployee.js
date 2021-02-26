import React from "react";

export default function CardEmployee({employee}) {
    console.log(employee);
  return (
    <div className="card shadow-lg mb-4 col-md-4 col-sm-12 justify-content-around" style={{width: "18rem"}}>
      <img className="card-img-top" src={employee.lgPicture} alt={`${employee.firstName} pic`} />
      <div className="card-body">
        <h4 className="card-title">{`${employee.firstName} ${employee.lastName}`}</h4>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><span><h5>Email: </h5></span>{employee.email}</li>
        <li className="list-group-item"><span><h5>Phone Number: </h5></span>{employee.phone}</li>
      </ul>
    </div>
  );
}
