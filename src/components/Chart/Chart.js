import React from 'react';

import ChartBar from './ChartBar';

const Chart = (props) => {
	return (props.dataPoints.map((dataPoint) => {
		<ChartBar
			key={dataPoint.label}
			value={dataPoint.value}
			maxValue={null}
			label={dataPoint.label}
		/>
	}));
};

export default Chart;