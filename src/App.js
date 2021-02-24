import React, {useEffect} from 'react';
import { fetchUsers } from './api';
import Table from './components/Table';

function App() {
  useEffect(() => {
    fetchUsers()
  }, []);
  return (
   <Table />
  );
}

export default App;
