import axios from "axios"; //imports axios

// Function that gets the data from the randomuser api.
function fetchEmployees() {
  return axios
    .get("https://randomuser.me/api/?results=30") //Limits to 30 employee returns
    .then((response) => response.data.results) //Returns the results section of the api which contains the users
    .catch((error) => {
      // handle error
      console.log(error);
    });
}

// Exports fetchEmployees
export { fetchEmployees };
