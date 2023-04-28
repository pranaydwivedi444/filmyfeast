import React from "react";
import classes from "./Modal.styles.css";
import ReactDOM from "react-dom";

function Modal({ children, close }) {
  return (
    <>
      <div className="model__overlay" onClick={close}></div>
      <div className="modal__container">{children}</div>;
    </>
  );
}

export default Modal;
