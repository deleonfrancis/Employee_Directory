import React, { useEffect, useState } from "react";
import { fetchEmployees } from "./api";
import Table from "./components/Table";
import { mapData } from "./util/util";

function App() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    fetchEmployees().then((empList) => {
      const mappedEmpList = mapData(empList);
      setEmployees(mappedEmpList);
    });
  }, []);

  return (
      <Table employees={employees} />
  );
}

export default App;
