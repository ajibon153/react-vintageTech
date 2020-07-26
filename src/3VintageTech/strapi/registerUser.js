// register user
import axios from "axios";
import url from "../utils/URL";

async function registerUser({ email, password, username }) {
  const response = await axios
    .post(`${url}/auth/local/register`, {
      email,
      password,
      username,
    })
    .catch((error) => console.log(error));
  //   console.log(response);
  return response;
}

export default registerUser;
