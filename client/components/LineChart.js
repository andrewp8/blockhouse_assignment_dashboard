"use client";
import { Line } from "react-chartjs-2";
import { chartRegistration_helper } from "../lib/chartRegistration_helper";

export default function LineChart({ data }) {
  chartRegistration_helper("line");

  return (
    <div className="bg-blue p-4 rounded-lg">
<div className="mx-auto m-4 w-full md:w-auto md:ml-auto text-center md:text-right">
        <h1 className="text-xl font-bold">Quarter Product Sale</h1>
        <h4>
          Compares the sales performance of products across the last quarter.
          Shows sales in thousands.
        </h4>
      </div>

      <Line
        data={{
          labels: data.labels,
          datasets: [
            {
              label: "Quater: Q4 2023",
              data: data.data,
              borderColor: "rgba(255, 255, 255, 1)",
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderWidth: 8,
            },
          ],
        }}
        options={{
          scales: {
            x: {
              type: "category",
              ticks: {
                font: {
                  size: 16, 
                },
              },
            },
            y: {
              beginAtZero: true,
              ticks: {
                font: {
                  size: 16,
                },
              },
            },
          },
        }}
      />
    </div>
  );
}
