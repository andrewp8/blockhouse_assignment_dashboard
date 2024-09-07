"use client";
import { Pie } from 'react-chartjs-2';
import { chartRegistration_helper } from '../lib/chartRegistration_helper';

export default function PieChart({ data }) {
    chartRegistration_helper('pie');

  return (
    <div>
      <h2>Pie Chart</h2>
      <Pie
        data={{
          labels: data.labels,
          datasets: [{
            data: data.data,
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          }]
        }}
      />
    </div>
  );
}
