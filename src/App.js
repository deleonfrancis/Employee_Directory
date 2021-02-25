import React, { useEffect, useState } from "react";
import Table from "./components/Table";
import { fetchEmployees } from "./api";
import { mapData } from "./util/util";

function App() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    fetchEmployees().then((empList) => {
      const mappedEmpList = mapData(empList);
      setEmployees(mappedEmpList);
    });
  }, []);

  if(employees.length === 0){
    return null;
  }


  return (
      <Table employees={employees} />
  );
}

export default App;
