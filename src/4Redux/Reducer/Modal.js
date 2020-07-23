import { MODAL_OPEN, MODAL_CLOSE } from "../Actions";

const defaultState = {
  isOpen: false,
  name: "modalReducer",
  text: "wang chingchong minta wang dong chong",
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case MODAL_OPEN:
      return {
        ...state,
        isOpen: true,
        name: action.payload.name,
        text: action.payload.text,
      };
    case MODAL_CLOSE:
      return {
        ...state,
        isOpen: false,
        name: "",
        text: "",
      };
  }
  return state;
}
