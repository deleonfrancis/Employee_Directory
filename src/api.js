import axios from "axios";

function fetchEmployees() {
  return axios
    .get("https://randomuser.me/api/?results=15")
    .then((response) => response.data.results)
    .catch((error) => {
      // handle error
      console.log(error);
    });
}

export { fetchEmployees };
