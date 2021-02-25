import { v4 as uuidv4 } from "uuid";

function mapData(employeeList) {
  return employeeList.map((employee) => {
    return {
      guid: uuidv4(),
      firstName: employee.name.first,
      lastName: employee.name.last,
      email: employee.email,
      phone: employee.phone,
      picture: employee.picture.thumbnail,
    };
  });
}

function sortData(employeeList, sortBy) {
  return employeeList.sort((a, b) => {
    let propertyA;
    let propertyB;
    if (sortBy === "phone") {
      const phoneNumberOne = a[sortBy];
      const phoneNumberTwo = b[sortBy];
      if (isNaN(phoneNumberOne[0])) {
        propertyA = phoneNumberOne.slice(1);
      }
      if (isNaN(phoneNumberTwo[0])) {
        propertyB = phoneNumberTwo.slice(1);
      }
      // if (propertyA < propertyB) {
      //   return -1;
      // }
      // if (propertyA > propertyB) {
      //   return 1;
      // }

      // names must be equal
      // return 0;
    }
    propertyA = a[sortBy].toUpperCase();
    propertyB = b[sortBy].toUpperCase();
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
      employee.firstName.includes(filterBy) ||
      employee.lastName.includes(filterBy) ||
      employee.email.includes(filterBy) ||
      employee.phone.includes(filterBy)
    );
  });
}

export { mapData, sortData, filterData };
