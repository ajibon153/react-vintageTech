// helper functions
export function featureProducts(data) {
  return data.filter((item) => {
    return item.featured === true;
  });
}
