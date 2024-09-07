"use client";
import { Pie } from 'react-chartjs-2';
import { chartRegistration_helper } from '../lib/chartRegistration_helper';

export default function PieChart({ data }) {
    chartRegistration_helper('pie');

  return (
    <div>
      <div className="ml-auto text-center">
        <h1 className=" text-xl font-bold">Market Share by Region</h1>
        <h2 className='font-bold'>TechCorp Inc.</h2>
        <h6 className='text-sm'>2024 Market Share</h6>
      </div>
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
