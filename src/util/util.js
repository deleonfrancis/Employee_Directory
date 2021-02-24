import { v4 as uuidv4 } from "uuid";

function mapData(employeeList) {
  return employeeList.map((employee) => {
    return {
      guid: uuidv4(),
      name: `${employee.name.first} ${employee.name.last}`,
      email: employee.email,
      phone: employee.phone,
      picture: employee.picture.thumbnail,
    };
  });
}

export { mapData };
