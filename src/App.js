import React, {useEffect, useState} from 'react';
import { fetchEmployees } from './api';
import Table from './components/Table';

function App() {
  const [employees, setEmployees] = useState([])
  useEffect(() => {
    fetchEmployees().then((empList) => setEmployees(empList))
  }, []);

  return (
   <Table employees={employees}/>
  );
}

export default App;
