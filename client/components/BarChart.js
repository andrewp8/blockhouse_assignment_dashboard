"use client";
import { Bar } from 'react-chartjs-2';
import { chartRegistration_helper } from '../lib/chartRegistration_helper';

export default function BarChart({ data }) {
    chartRegistration_helper('bar');

  return (
    <div>
      <div className="ml-auto text-center">
        <h1 className=" text-xl font-bold">Monthly Revenue Growth</h1>
      </div>
      <Bar
        data={{
          labels: data.labels,
          datasets: [{
            label: 'Oct 2023 - Feb 2024',
            data: data.data,
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
            borderWidth: 1,
          }],
        }}
        options={{
          responsive: true,
          scales: {
            x: { type: 'category' },
            y: { beginAtZero: true }
          }
        }}
      />
    </div>
  );
}
