"use client";
import { Chart } from "react-chartjs-2";
import { chartRegistration_helper } from '../lib/chartRegistration_helper';
chartRegistration_helper('candlestick');

export default function CandlestickChart({ data }) {
  // Format the data for the chart and assign colors manually
  const formattedData = data.map((d) => ({
    x: new Date(d.x),  // Convert x to a Date object
    o: d.open,
    h: d.high,
    l: d.low,
    c: d.close,
    // Set green for increasing and red for decreasing candlesticks
    backgroundColor: d.close > d.open ? 'green' : 'red',
    borderColor: d.close > d.open ? 'green' : 'red',
  }));
  const labels = formattedData.map((d) =>
    d.x
  );
  return (
    <Chart
      type="candlestick"
      data={{
        datasets: [{
          label: 'Candlestick Data',
          data: formattedData,
          backgroundColor: formattedData.map(d => d.backgroundColor),
            color: {
              up: 'rgba(0, 200, 0, 0.9)',      // Green for increasing
              down: 'rgba(255, 0, 0, 0.9)',    // Red for decreasing
              unchanged: 'rgba(0, 0, 255, 0.9)', // Blue for unchanged
            },
          // Adjust bar thickness to prevent overlapping
          barThickness: 20, // Adjust this value as needed
        }],
      }}
      options={{
        scales: {
            x: {
                type: 'category',
                labels: labels,
                title: {
                  display: true,
                  text: 'Date',  // X-axis label
                },
                ticks: { 
                  autoSkip: false,  // Ensure all labels are displayed
                  font: {
                    size: 10,       // Adjust the font size to ensure labels fit
                  },
                  callback: function(value) {
                    // Access the date from the labels array using the index
                    const date = labels[value];  // `value` is the index
                    return new Date(date).toISOString().split('T')[0].replace(/-/g, '/');  // Format as 'yyyy/MM/dd'
                  },
                  
                },
              },
          y: {
            beginAtZero: false,
            title: {
              display: true,
              text: 'Price',  // Label for Y-axis
            },
            ticks: {
              callback: function(value) {
                return '$' + value;  // Format Y-axis as prices with $
              }
            }
          }
        },
        plugins: {
          tooltip: {
            callbacks: {
              title: function(tooltipItems) {
                const dateIndex = tooltipItems[0].dataIndex;  // Get the index of the data point
                const date = labels[dateIndex];  // Get the date from the labels array
        
                // Format the date to 'yyyy/MM/dd'
                return new Date(date).toISOString().split('T')[0].replace(/-/g, '/');
              },
        
              label: function(tooltipItem) {
                const dataPoint = tooltipItem.raw;  // Access OHLC data
                return [
                  `Open: $${dataPoint.o}`,
                  `High: $${dataPoint.h}`,
                  `Low: $${dataPoint.l}`,
                  `Close: $${dataPoint.c}`,
                ];
              }
            }
          }
        },
        responsive: true,
      }}
    />
  );
}
