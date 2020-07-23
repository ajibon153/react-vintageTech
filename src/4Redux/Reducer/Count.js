import { DEC, INC, RESET } from "../Actions";

const defaultState = {
  count: 0,
  name: "countReducer",
};

// setup reducer
function count(state = defaultState, action) {
  // if (action.type === "DECREASE") {
  //   return { ...state, count: state.count - 1 };
  // } else if (action.type === "INCREASE") {
  //   return { ...state, count: state.count + 1 };
  // }

  switch (action.type) {
    case DEC:
      return { ...state, count: state.count - 1 };
    case INC:
      return { ...state, count: state.count + 1 };
    case RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }

  return state;
}

export default count;
