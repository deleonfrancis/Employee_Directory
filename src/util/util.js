// Import uuid. used to get a random id.
import { v4 as uuidv4 } from "uuid";

// Function that maps over the data and returns what we need from the data.
function mapData(employeeList) {
  return employeeList.map((employee) => {
    return {
      guid: uuidv4(), // used to get a random uuid, will later be assigned as the 'key'
      firstName: employee.name.first,
      lastName: employee.name.last,
      email: employee.email,
      phone: employee.phone,
      picture: employee.picture.thumbnail,
    };
  });
}

// Function that sorts any data being passed in.
function sortData(employeeList, sortBy) {
  return employeeList.sort((a, b) => {
    let propertyA;
    let propertyB;

    // handles the logic for if a phone number is returned in a (407) format
    if (sortBy === "phone") {
      const phoneNumberOne = a[sortBy];
      const phoneNumberTwo = b[sortBy];
      if (isNaN(phoneNumberOne[0])) {
        propertyA = phoneNumberOne.slice(1);
      }
      if (isNaN(phoneNumberTwo[0])) {
        propertyB = phoneNumberTwo.slice(1);
      }
    }
    // sorts numbers and letters
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

// Function for filter or search feature.
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

// exports the functions mapData, sortData, and filterData
export { mapData, sortData, filterData };
