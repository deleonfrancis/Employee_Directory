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

function sortData(employeeList, sortBy) {
  return employeeList.sort((a, b) => {
    const propertyA = a[sortBy].toUpperCase();
    const propertyB = b[sortBy].toUpperCase();
    if (propertyA < propertyB) {
      return -1;
    }
    if (propertyA > propertyB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
}

function filterData(employeeList, filterBy) {
  return employeeList.filter((employee) => {
    return (
      employee.name.includes(filterBy) ||
      employee.email.includes(filterBy) ||
      employee.phone.includes(filterBy)
    );
  });
}

export { mapData, sortData, filterData };
