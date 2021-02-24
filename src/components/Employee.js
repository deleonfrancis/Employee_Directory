import React from 'react'

export default function Employee({employee}) {
    return (
        <tr>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.phone}</td>
        </tr>
    )
}
