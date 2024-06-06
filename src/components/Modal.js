import ReactDOM from 'react-dom';

import './Modal.css';

const Backdrop = (props) => {
  const handleClose=()=>{
    props.onClose(false)
  }
  return <div className='backdrop' onClick={handleClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className='modal'>
      <div className='content'>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlay');

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.setIsClose}/>, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;