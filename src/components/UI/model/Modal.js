import { Fragment } from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import Preview from "../../preview/Preview";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  const error = useSelector((state) => state.ui.error);

  if (error) {
    return (
      <div className={classes.modal}>
        <div className={classes.header}>
          <div className={classes.title}>Error Occured</div>
          <button onClick={props.onClose} className={classes.close}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        </div>
        <div className={classes.body}>
          <div className={classes.error}>
            <div className={classes.status}>{error.status}</div>
            <div className={classes.message}>{error.message}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.modal}>
      <div className={classes.header}>
        <div className={classes.title}>Preview</div>
        <button onClick={props.onClose} className={classes.close}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
      </div>
      <div className={classes.body}>
        <div className={classes.preview}>
          <Preview />
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose} />,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
