import { firebaseDb } from './Firebase';

// export const submitOrder = async (data) => {
//   console.log('submit', data);
//   let usersRef = firebaseDb.ref('order/' + data.userToken);
//   usersRef
//     .onWrite((event) => {
//       return event.data.ref.push({
//         name: data.name,
//         total: data.total,
//         items: data.items,
//         stripeTokenId: data.stripeTokenId,
//         userToken: data.userToken,
//       });
//     })
//     .then((res) => console.log('res', res))
//     .catch((err) => console.log('err', err));
// };

export const submitOrder = async (data) => {
  console.log('submit', data);

  const usersRef = firebaseDb.ref('order/' + data.userToken);

  // return new Promise((resolve, reject) => {
  // usersRef.on('child_added',function(snapshot){});
  let results = usersRef.push(
    {
      name: data.name,
      total: data.total,
      items: data.items,
      stripeTokenId: data.stripeTokenId,
      userToken: data.userToken,
    },
    function (error) {
      // console.log('error', error);
      if (error && error !== null) {
        return false;
      } else {
        return true;
      }
    }
  );
  // console.log('results', results);
  return results;

  //   resolve(true);
  // });
};
