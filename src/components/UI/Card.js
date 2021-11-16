import React from 'react';

import classes from './Card.module.css'

const Card = (props) => {
	// The css from AddUsers.module.css is consumed as props.className here
	return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
};

export default Card;
