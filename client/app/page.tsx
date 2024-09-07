"use client";
import { useEffect, useState } from 'react';
import { fetchCandlestickData, fetchLineChartData, fetchBarChartData, fetchPieChartData } from '../lib/api';
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';
import CandlestickChart from '../components/CandlestickChart';

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
      setCandlestickData(candlestick.data);
      setLineChartData(line);
      setBarChartData(bar);
      setPieChartData(pie);
    }
    fetchData();
  }, []);

  if (!candlestickData || !lineChartData || !barChartData || !pieChartData) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <div className="grid grid-cols-2 gap-4">
        <CandlestickChart data={candlestickData} />
        <LineChart data={lineChartData} />
        <BarChart data={barChartData} />
        <PieChart data={pieChartData} />
      </div>
    </div>
  );
}