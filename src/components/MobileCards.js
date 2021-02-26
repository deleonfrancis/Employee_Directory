import React from 'react'
import CardEmployee from "./CardEmployee"

export default function MobileCards({employeeList}) {
    return (
        <div class="container">
        {employeeList.map((employee) => (
          <CardEmployee employee={employee} key={employee.guid} />
        ))}
      </div>
    )
}
