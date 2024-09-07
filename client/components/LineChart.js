"use client";
import { Line } from 'react-chartjs-2';
import { chartRegistration_helper } from '../lib/chartRegistration_helper';

export default function LineChart({ data }) {
  chartRegistration_helper
  ('line');

  return (
    <div>
      <h2>Line Chart</h2>
      <Line
        data={{
          labels: data.labels, 
          datasets: [{
            label: 'Line Data',
            data: data.data,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
          }],
        }}
        options={{
          scales: {
            x: { type: 'category' },
            y: { beginAtZero: true }
          }
        }}
      />
    </div>
  );
}
