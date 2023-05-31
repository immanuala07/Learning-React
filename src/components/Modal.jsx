import { useNavigate } from 'react-router-dom';
import classes from './Modal.module.css';

function Modal ({ children }) {
  const navigate = useNavigate();

  function closeHandler () {
    // navigate("/");
    // (or)
    navigate('..');
  }

  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} />
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
