import firebase, { firebaseDb } from './Firebase';

export const registerUserApi = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({ type: 'CHANGE_LOADING', value: true });
    firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((user) => {
        dispatch({ type: 'CHANGE_LOADING', value: false });
        dispatch({ type: 'CHANGE_LOGIN', value: true });
        resolve(true);
      })
      .catch((error) => {
        dispatch({ type: 'CHANGE_LOADING', value: false });
        dispatch({ type: 'CHANGE_LOGIN', value: false });
        reject(false);
      });
  });
};

export const loginUserApi = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({ type: 'CHANGE_LOADING', value: true });
    firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then((res) => {
        const datauser = {
          email: res.user.email,
          uid: res.user.uid,
          emailVerified: res.user.emailVerified,
          refreshToken: res.user.refreshToken,
        };
        dispatch({ type: 'CHANGE_LOADING', value: false });
        dispatch({ type: 'CHANGE_LOGIN', value: true });
        dispatch({ type: 'CHANGE_USER', value: datauser });
        resolve(datauser);
      })
      .catch((error) => {
        dispatch({ type: 'CHANGE_LOADING', value: false });
        dispatch({ type: 'CHANGE_LOGIN', value: false });
        dispatch({ type: 'CHANGE_USER', value: {} });
        reject(false);
      });
  });
};

export const getDataFromApi = (userId) => (dispatch) => {
  const urlNotes = firebaseDb.ref('notes/' + userId);

  return new Promise((resolve, reject) => {
    urlNotes.on('value', function (snapshot) {
      const data = [];
      Object.keys(snapshot.val()).map((key) => {
        data.push({
          id: key,
          data: snapshot.val()[key],
        });
      });
      dispatch({ type: 'SET_NOTES', value: data });
      resolve(true);
      console.log('get data', data);
    });
  });
};
