import React from "react";
import { DEC, INC, RESET, MODAL_OPEN } from "./Actions";

// npm install --save redux react-redux
// if error refresh cahcing with = npm cache clean --force
import { connect } from "react-redux";

function Counter({ name, count, increase, decrease, reset }) {
  // const { name } = props.store;
  // const amount = props.store.count;
  // const [count, setCount] = React.useState(0);
  return (
    <div className="container">
      <h1>Counter</h1>
      <h5>{name}</h5>
      <p className="counter">{count}</p>
      <div className="buttons">
        <button
          className="btn"
          type="button"
          onClick={decrease}
          // onClick={() => setCount(count - 1)} //old
        >
          Decrease
        </button>
        <button
          className="btn"
          type="button"
          onClick={reset}
          // onClick={() => setCount(0)}
        >
          Reset
        </button>
        <button className="btn" type="button" onClick={increase}>
          Increase
        </button>
      </div>
    </div>
  );
}

function mapStateToProps({ countState: { count, name } }) {
  return { count: count, name: name };
  // return { ...countState }; // jika tidak ada  { count, name }
}
function mapDispatchToProps(dispatch, componentProps) {
  return {
    increase: () => dispatch({ type: INC }),
    decrease: () => dispatch({ type: DEC }),
    reset: () => {
      dispatch({ type: RESET });
      dispatch({
        type: MODAL_OPEN,
        payload: {
          name: "Asakura Jibon",
          text:
            "DevTools failed to load SourceMap: Could not load content for chrome-extension:// fheoggkfdfchfphceeifdbepa ooicaho/ sourceMap/chrome/ iframe_handler.map: HTTP error: status code 404, net:: ERR_UNKNOWN_ URL_SCHEME Asakura Jibon aaaaaa aaaaaaa aaa",
        },
      });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
