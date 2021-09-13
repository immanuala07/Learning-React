import React from 'react';

import './ChartBar.css'

const ChartBar = (props) => {
	let barFillHeight = '0%';

	if (props.max > 0) {
		// The below line willreturn the percentage of the bar to be filled and rounding to the nearest integer
		// Later the barFillHeight is assigned as the dynamic style height in the chart.
		barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
	}

	return (
		<div className='chart-bar'>
			<div className='chart-bar__inner'>
				{/* Dynamic Styles */}
				{/* In the react the style is applied to the react component or its code bit differently */}
				{/* In style prop expects a js object as the value so we add an extra curly braces */}
				{/* Within the curly braces use css property names as key names and respective value for it */}
				<div className='chart-bar__fill' style={{ height: barFillHeight }}></div>
			</div>
			<div className='chart-bar__label'>{props.label}</div>
		</div >
	);

};

export default ChartBar;