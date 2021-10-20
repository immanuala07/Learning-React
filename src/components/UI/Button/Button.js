import React from 'react'; // eslint-disable-line no-unused-vars
import styled from 'styled-components';

// Adding the button styles using styled component package  
const Button = styled.button`
	// button size is 100% till the maximum width of the page is 769px.
	width: 100%;

	font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

// Media queries - Handles button size to be auto till the minimum width of the page is 768px.
@media (min-width: 768px) {
	width: auto;
}

&:focus {
  outline: none;
}

&:hover,
&:active {
  background: #ac0e77;
  border-color: #ac0e77;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
}`;

// The below button is not used instead of that the above styled component is used for button.
// Button type, and classname are applied inbuilt through styled component.

// const Button = props => {
// 	return (
// 		<button type={props.type} className="button" onClick={props.onClick}>
// 			{props.children}
// 		</button>
// 	);
// };

export default Button;
