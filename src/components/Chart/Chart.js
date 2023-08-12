import ChartBar from './ChartBar';

import './Chart.css';

function Chart({ data }) {
  const maxValue = data.toSorted((a, b) => b.value - a.value)[0].value;

  return (
    <div className='chart'>
      {data.map(({ value, label }, index) => (
        <ChartBar key={index} value={value} maxValue={maxValue} label={label} />
      ))}
    </div>
  );
}

export default Chart;
