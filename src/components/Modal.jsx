import classes from './Modal.module.css';

function Modal ({ children, onClose }) {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose} />
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
