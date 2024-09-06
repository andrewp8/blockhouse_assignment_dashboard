"use client";
import { useEffect, useState } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { fetchCandlestickData, fetchLineChartData, fetchBarChartData, fetchPieChartData } from '../lib/api';
import 'chart.js/auto';

export default function Dashboard() {
  const [candlestickData, setCandlestickData] = useState(null);
  const [lineChartData, setLineChartData] = useState(null);
  const [barChartData, setBarChartData] = useState(null);
  const [pieChartData, setPieChartData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const candlestick = await fetchCandlestickData();
      const line = await fetchLineChartData();
      const bar = await fetchBarChartData();
      const pie = await fetchPieChartData();
      setCandlestickData(candlestick);
      setLineChartData(line);
      setBarChartData(bar);
      setPieChartData(pie);
    }
    fetchData();
  }, []);
  if (!lineChartData || !barChartData || !pieChartData) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-lg mb-2">Line Chart</h2>
          <Line data={{ labels: lineChartData.labels, datasets: [{ label: 'Line Data', data: lineChartData.data }] }} />
        </div>
        <div>
          <h2 className="text-lg mb-2">Bar Chart</h2>
          <Bar data={{ labels: barChartData.labels, datasets: [{ label: 'Bar Data', data: barChartData.data }] }} />
        </div>
        <div>
          <h2 className="text-lg mb-2">Pie Chart</h2>
          <Pie data={{ labels: pieChartData.labels, datasets: [{ data: pieChartData.data }] }} />
        </div>
      </div>
    </div>
  );
}
