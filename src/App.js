import React, { useEffect, useState } from "react"; // allows us to use the use react useEffect and useState Hooks 
import Dashboard from "./components/Dashboard"; //imports the table 
import { fetchEmployees } from "./api"; //imports the function that gets the data
import { mapData } from "./util/util"; //imports the function that maps and returns the data
import "./assets/css/styles.css"


function App() {
  // creates a const call employee, this const is an empty array initially. 
  const [employees, setEmployees] = useState([]);
  
  // is used to get the data, map the data, and change the employees from an empty array to an array that contains the data
  useEffect(() => {
    fetchEmployees().then((empList) => { // gets the data then passes it into a function that ...
      const mappedEmpList = mapData(empList); //...maps the data and returns what we need as a new const.
      setEmployees(mappedEmpList); // updates 'employees' with new data. 
    });
  }, []);


  // if there are no employees, do nothing.
  if(employees.length === 0){
    return null;
  }


  return (
      <Dashboard employees={employees} /> // passes employees into the Table
  );
}

// Exports App
export default App;
