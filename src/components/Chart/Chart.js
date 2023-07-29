import ChartBar from './ChartBar';

import './Chart.css';

function Chart({ data }) {
  return (
    <div>
      {data.map(({ value, label }, index) => (
        <ChartBar key={index} value={value} maxValue={null} />
      ))}
    </div>
  );
}
