"use client";
import { Bar } from 'react-chartjs-2';
import { chartRegistration_helper } from '../lib/chartRegistration_helper';

export default function BarChart({ data }) {
    chartRegistration_helper('bar');

  return (
    <div>
      <h2>Bar Chart</h2>
      <Bar
        data={{
          labels: data.labels,
          datasets: [{
            label: 'Bar Data',
            data: data.data,
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)']
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
