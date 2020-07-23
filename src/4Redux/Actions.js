//  counter action
export const INC = "INCREASE";
export const DEC = "DECREASE";
export const RESET = "RESET";

// modal action
export const MODAL_OPEN = "MODAL_OPEN";
export const MODAL_CLOSE = "MODAL_CLOSE";

// product action
export const SET_LOADING = "SET_LOADING";
export const GET_PRODUCTS = "GET_PRODUCTS";

// action creator
export const setLoading = () => {
  return { type: SET_LOADING };
};
export const getProducts = () => {
  return async function (dispatch) {
    dispatch(setLoading());
    const response = await fetch(
      "https://johnsmilgatutorials.com/projects/react-tech-store-v2/products"
    );
    const data = await response.json();
    dispatch({ type: GET_PRODUCTS, payload: data });
    // type: GET_PRODUCTS;
  };
};
