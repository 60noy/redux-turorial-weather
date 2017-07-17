import React from 'react';
import Trend from 'react-trend';

const average = (data) => {
  const sum = data.reduce((a, b) => a + b);
  return Math.round(sum / data.length);
}

const ChartLine = ({data,gradient,units}) => (
  <div>
    <Trend
      smooth
      autoDraw
      autoDrawDuration={3000}
      autoDrawEasing="ease-out"
      data={data}
      gradient={gradient}
      radius={10}
      strokeWidth={2}
      height={100}
      strokeLinecap={'round'}
    />
    <div>
      {average(data)} <strong>{units}</strong>
    </div>
  </div>
);

export default ChartLine;
