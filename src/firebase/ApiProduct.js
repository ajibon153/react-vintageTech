import firebase, { firebaseDb } from './Firebase';

export const getDataFromApi = () => {
  const urlNotes = firebaseDb.ref('products/');

  return new Promise((resolve, reject) => {
    urlNotes.on('value', function (snapshot) {
      // urlNotes.on('value').then((snapshot) => {
      const data = [];
      Object.keys(snapshot.val()).map((key) => {
        data.push({
          id: key,
          data: snapshot.val()[key],
        });
      });
      if (data.length > 0) {
        resolve({ success: true, data });
      } else {
        reject({ success: false });
      }
    });
    // .catch((err) => ({ success: false, data: err }));
  });
};
