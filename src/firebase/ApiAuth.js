import firebase from './Firebase';

export const registerUserApi = async (data) => {
  console.log('registerUserApi', data);

  let response = await firebase
    .auth()
    .createUserWithEmailAndPassword(data.email, data.password)
    .then((user) => {
      return user;
    })
    .catch((error) => {
      return { success: false, data: error };
    });
  console.log('response', response);

  return response;
};

export const loginUserApi = async (data) => {
  console.log('loginUserApi', data);
  // return new Promise((resolve, reject) => {
  let response = await firebase
    .auth()
    .signInWithEmailAndPassword(data.email, data.password)
    .then((res) => {
      const datauser = {
        email: res.user.email,
        uid: res.user.uid,
        emailVerified: res.user.emailVerified,
        refreshToken: res.user.refreshToken,
      };
      return { success: true, data: datauser };
      // resolve({ success: true, data: datauser });
    })
    .catch((error) => {
      return { success: false, data: error };
    });
  console.log('response', response);
  return response;
  // });
};
