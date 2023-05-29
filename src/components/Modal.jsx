import classes from './Modal.module.css';

function Modal ({ children }) {
  return (
    <>
      <div className={classes.backdrop} />
      <dialog
        className={classes.modal}
        open={true}
      >
        {children}
      </dialog>
    </>
  );
}

export default Modal;
