"use client";
import { Chart } from "react-chartjs-2";
import { chartRegistration_helper } from "../lib/chartRegistration_helper";
chartRegistration_helper("candlestick");

export default function CandlestickChart({ data }) {
  // Format the data for the chart and assign colors manually
  const formattedData = data.map((d) => ({
    x: new Date(d.x), // Convert x to a Date object
    o: d.open,
    h: d.high,
    l: d.low,
    c: d.close,
    // Set green for increasing and red for decreasing candlesticks
    backgroundColor: d.close > d.open ? "green" : "red",
    borderColor: d.close > d.open ? "green" : "red",
  }));
  const labels = formattedData.map((d) => d.x);
  return (
    <div>
      <h1 className=" text-xl font-bold m-4">TechCorp Inc,</h1>
      <Chart
        type="candlestick"
        data={{
          datasets: [
            {
              label: "Stock Price Movement",
              data: formattedData,
              backgroundColor: formattedData.map((d) => d.backgroundColor),
              color: {
                up: "rgba(0, 200, 0, 0.9)", // Green for increasing
                down: "rgba(255, 0, 0, 0.9)", // Red for decreasing
                unchanged: "rgba(0, 0, 255, 0.9)", // Blue for unchanged
              },
              barThickness: 20, 
            },
          ],
        }}
        options={{
          scales: {
            x: {
              type: "category",
              labels: labels,
              title: {
                display: true,
                text: "Date",
              },
              ticks: {
                autoSkip: false, // not to skipp display the labels
                font: {
                  size: 10, 
                },
                callback: function (value) {
                  const date = labels[value]; // `value` is the index
                  return new Date(date)
                    .toISOString()
                    .split("T")[0]
                    .replace(/-/g, "/"); // format to 'yyyy/MM/dd'
                },
              },
            },
            y: {
              beginAtZero: false,
              title: {
                display: true,
                text: "Price",
              },
              ticks: {
                callback: function (value) {
                  return "$" + value;
                },
              },
            },
          },
          plugins: {
            tooltip: {
              callbacks: {
                title: function (tooltipItems) {
                  const dateIndex = tooltipItems[0].dataIndex; // Get the index of the data point
                  const date = labels[dateIndex]; // Get the date from the labels array
                  
                  return new Date(date)
                    .toISOString()
                    .split("T")[0]
                    .replace(/-/g, "/");
                },

                label: function (tooltipItem) {
                  const dataPoint = tooltipItem.raw; // Access OHLC data
                  return [
                    `Open: $${dataPoint.o}`,
                    `High: $${dataPoint.h}`,
                    `Low: $${dataPoint.l}`,
                    `Close: $${dataPoint.c}`,
                  ];
                },
              },
            },
          },
          responsive: true,
        }}
      />
    </div>
  );
}
