"use client";
import { useEffect, useState } from "react";
import "./globals.css";
import {
  fetchCandlestickData,
  fetchLineChartData,
  fetchBarChartData,
  fetchPieChartData,
} from "../lib/api";
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";
import CandlestickChart from "../components/CandlestickChart";

export default function Dashboard() {
  const [candlestickData, setCandlestickData] = useState(null);
  const [lineChartData, setLineChartData] = useState(null);
  const [barChartData, setBarChartData] = useState(null);
  const [pieChartData, setPieChartData] = useState(null);

  const [candlestickError, setCandlestickError] = useState(null);
  const [lineChartError, setLineChartError] = useState(null);
  const [barChartError, setBarChartError] = useState(null);
  const [pieChartError, setPieChartError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const candlestick = await fetchCandlestickData();
      console.log("candlestick", candlestick);
      if (candlestick.error) {
        setCandlestickError(candlestick.error);
      } else {
        setCandlestickData(candlestick.candlestick.data);
      }

      const line = await fetchLineChartData();
      console.log("line", line);
      if (line.error) {
        setLineChartError(line.error);
      } else {
        setLineChartData(line.line_chart);
      }

      const bar = await fetchBarChartData();
      if (bar.error) {
        setBarChartError(bar.error);
      } else {
        setBarChartData(bar.bar_chart);
      }

      const pie = await fetchPieChartData();
      if (pie.error) {
        setPieChartError(pie.error);
      } else {
        setPieChartData(pie.pie_chart);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Dashboard</h1>

      <div className="w-full mb-8">
        {candlestickError ? (
          <div className="text-red-500 font-bold">{candlestickError}</div>
        ) : candlestickData ? (
          <div className="bg-white p-4 rounded-lg shadow-md w-full">
            <CandlestickChart data={candlestickData} />
          </div>
        ) : (
          <p className="text-center">Loading candlestick chart...</p>
        )}
      </div>

      <div className="w-full mb-8">
        {lineChartError ? (
          <div className="text-red-500 font-bold">{lineChartError}</div>
        ) : lineChartData ? (
          <div className="bg-white p-4 rounded-lg shadow-md">
            <LineChart data={lineChartData} />
          </div>
        ) : (
          <p className="text-center">Loading line chart...</p>
        )}
      </div>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Bar Chart */}
        {barChartError ? (
          <div className="text-red-500 font-bold">{barChartError}</div>
        ) : barChartData ? (
          <div className="bg-white p-4 rounded-lg shadow-md justify-center items-center">
            <BarChart data={barChartData} />
          </div>
        ) : (
          <p className="text-center">Loading bar chart...</p>
        )}

        {/* Pie Chart */}
        {pieChartError ? (
          <div className="text-red-500 font-bold">{pieChartError}</div>
        ) : pieChartData ? (
          <div className="bg-white p-4 rounded-lg shadow-md items-center">
            <PieChart data={pieChartData} />
          </div>
        ) : (
          <p className="te xt-center">Loading pie chart...</p>
        )}
      </div>
    </div>
  );
}
