import React from 'react';

import './Modal.css';

const modal = (props) => {

 const cssClasses = [
    "Modal",
    props.show === "entering"
      ? "ModalOpen"
      : props.show === "exiting"
      ? "ModalClosed"
      : null,
  ];

 console.log(props.show); // entering, entered, exiting & exited

  return (
		// JS join() returns an array as a string.
		<div className={cssClasses.join(" ")}>
			<h1>A Modal</h1>
			<button className="Button" onClick={props.closed}>
				Dismiss
			</button>
		</div>
  );
};

export default modal;
