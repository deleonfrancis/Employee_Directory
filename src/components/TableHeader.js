import React from "react";
import SortButton from "./SortButton";

export default function TableHeader({ onClick }) {
  return (

  <div class="row">
    <div class="col center-text"><SortButton text="" onClick={() => {}} /></div>
    <div class="col center-text"><SortButton text="First Name" sortField="firstName" onClick={onClick} /></div>
    <div class="col center-text"><SortButton text="Last Name" sortField="lastName" onClick={onClick} /></div>
    <div class="col center-text"><SortButton text="Email" sortField="email" onClick={onClick} /></div>
    <div class="col center-text"><SortButton text="Phone Number" sortField="phone" onClick={onClick} /></div>
  </div>

    // <thead>
    //   <tr>
    //     <th className="pl-2">
    //       <SortButton text="" onClick={() => {}} />
    //     </th>
    //     <th className="pl-2">
    //       <SortButton
    //         text="First Name"
    //         sortField="firstName"
    //         onClick={onClick}
    //       />
    //     </th>
    //     <th className="pl-2">
    //       <SortButton text="Last Name" sortField="lastName" onClick={onClick} />
    //     </th>
    //     <th className="pl-2">
    //       <SortButton text="Email" sortField="email" onClick={onClick} />
    //     </th>
    //     <th className="pl-2">
    //       <SortButton text="Phone Number" sortField="phone" onClick={onClick} />
    //     </th>
    //   </tr>
    // </thead>
  );
}
