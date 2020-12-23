// register user
import axios from "axios";
import url from "../utils/URL";

async function registerUser({ email, password, username }) {
  console.log(password);
  const response = await axios
    .post(`${url}/auth/local/register`, {
      username,
      email,
      password: "aaaaa",
    })
    .catch((error) => console.log(error));

  return response;
}

export default registerUser;
