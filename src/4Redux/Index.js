// redux === responsible for our data (Storing, updating)
// react-redux === responsible for connecting our app to reduc store value
//store is looking for reducer === a function that used to update

import React from "react";
import "./index.css";
import Counter from "./Counter";
import Modal from "./Modal";
import Product from "./Product";
import { DEC, INC, RESET } from "./Actions";

// npm install --save redux react-redux
// if error refresh cahcing with = npm cache clean --force
import { createStore, combineReducers, applyMiddleware } from "redux"; // store data, think of state
import { Provider } from "react-redux";
// npm install --save redux-devtools-extension
import { composeWithDevTools } from "redux-devtools-extension";
// npm install --save redux-thunk
import thunk from "redux-thunk";

//reducers
import countReducer from "./Reducer/Count";
import modalReducer from "./Reducer/Modal";
import productReducer from "./Reducer/Product";

// setup initial state
const defaultState = {
  count: 0,
  name: "jibon",
};

// API redux thunk
const middleWare = [thunk];

// setup store
const store = createStore(
  combineReducers({
    countState: countReducer,
    modalState: modalReducer,
    productState: productReducer,
  }),
  composeWithDevTools(applyMiddleware(...middleWare))
  // defaultState,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default function Index() {
  return (
    <Provider store={store}>
      <Counter random="random props" />
      <Modal />
      <Product />
    </Provider>
  );
}
