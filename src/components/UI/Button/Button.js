import React from 'react'; // eslint-disable-line no-unused-vars
import styled from 'styled-components';

// Adding the button styles using styled component package  
const Button = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

&:focus {
  outline: none;
}

&:hover,
&:active {
  background: #ac0e77;
  border-color: #ac0e77;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
}`;

// The below button is not used instead of that the above styled component is used for button
// const Button = props => {
// 	return (
// 		<button type={props.type} className="button" onClick={props.onClick}>
// 			{props.children}
// 		</button>
// 	);
// };

export default Button;
