//login user
import axios from "axios";
import url from "../utils/URL";

async function loginUser({ email, password }) {
  // console.log("email " + email);
  console.log("password login " + password);
  const response = await axios
    .post(`${url}/auth/local`, {
      identifier: email,
      password,
    })
    .catch((error) => console.log(error));
  return response;
}

export default loginUser;
