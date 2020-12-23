import url from './URL';

// untuk mengubah string url.img
export function flattenProducts(data) {
  // console.log("URL " + url);
  return data.map((item) => {
    // //cloudinary
    let image = item.data.image.url;
    // // local setup no deplotment
    // let image = `${url}${item.image.url}`;
    // let dataFlatten = { ...item, image };
    // console.log(dataFlatten);
    // console.log(JSON.parse(dataFlatten));
    return { ...item, image };
  });
}

// helper functions
export function featureProducts(data) {
  return data.filter((item) => {
    // console.log(item);
    return item.Featured === true;
  });
}
