import React from "react";
import classes from "./Modal.styles.css";
import ReactDOM from "react-dom";

function Modal({ children }) {
  return (
    <>
      <div className="model__overlay"></div>
      <div className="modal__container">{children}</div>;
    </>
  );
}

export default Modal;
