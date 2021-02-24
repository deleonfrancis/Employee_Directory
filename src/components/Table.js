import React, { useEffect } from "react";

export default function Table({employees}) {
  useEffect(() => {}, []);
  return <div><pre>{JSON.stringify(employees, null, 2)}</pre></div>;
}
