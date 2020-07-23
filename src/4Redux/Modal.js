import React from "react";
import PropTypes from "prop-types";

// npm install --save redux react-redux
// if error refresh cahcing with = npm cache clean --force
import { connect } from "react-redux";

import { MODAL_CLOSE } from "./Actions";

const Modal = ({ isOpen, name, text, close }) => {
  return (
    <div className={`modal-overlay ${isOpen ? `isModalOpen` : null}`}>
      <div className="modal-container">
        <h4>{name}</h4>
        <p>{text}</p>
        <button className="btn btn-primary" onClick={close}>
          Close
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};

function MapStateToProps({ modalState }) {
  return { ...modalState };
}

function MapDispatchToProps(dispatch) {
  return { close: () => dispatch({ type: MODAL_CLOSE }) };
}
export default connect(MapStateToProps, MapDispatchToProps)(Modal);
