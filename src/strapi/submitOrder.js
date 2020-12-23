// submit order
import axios from "axios";
import url from "../utils/URL";

async function submitOrder({ name, total, items, stripeToken, userToken }) {
  console.log(stripeToken);
  const response = await axios
    .post(
      `${url}/orders`,
      {
        name,
        total,
        items,
        stripeToken,
      },
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    )
    .catch((err) => console.log(err));
  return response;
}

export default submitOrder;
