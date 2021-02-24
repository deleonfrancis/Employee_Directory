import axios from "axios";

function fetchUsers() {
  return axios.get('https://randomuser.me/api/?results=15')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}

export { fetchUsers };
