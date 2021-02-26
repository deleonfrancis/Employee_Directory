import React from "react";
import SortButton from "./SortButton";

export default function TableHeader({ onClick }) {
  return (

  <div class="row border-bottom">
    <div class="col-lg-2 pl-0 center-text text-secondary"><p className="m-0">Sort By:</p> </div>
    <div class="col-lg-2 pl-0 center-text"><SortButton text="First Name" sortField="firstName" onClick={onClick} /></div>
    <div class="col-lg-2 pl-0 center-text"><SortButton text="Last Name" sortField="lastName" onClick={onClick} /></div>
    <div class="col-lg-4 pl-0 center-text"><SortButton text="Email" sortField="email" onClick={onClick} /></div>
    <div class="col-lg-2 pl-0 center-text"><SortButton text="Phone Number" sortField="phone" onClick={onClick} /></div>
  </div>

  );
}
