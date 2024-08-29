import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TopUpWithdrawChart: React.FC = () => {
  const [monthRange, setMonthRange] = useState<"Jan-Jun" | "Jul-Dec">(
    "Jan-Jun"
  );

  const data = {
    labels:
      monthRange === "Jan-Jun"
        ? ["January", "February", "March", "April", "May", "June"]
        : ["July", "August", "September", "October", "November", "December"],
    datasets: [
      {
        label: "Top Up",
        data:
          monthRange === "Jan-Jun"
            ? [300, 500, 400, 700, 600, 800]
            : [900, 1000, 1100, 1200, 1300, 1400],
        backgroundColor: "#1814F3",
        // borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        maxBarThickness: 20, // Set maximum bar width
      },
      {
        label: "Withdraw",
        data:
          monthRange === "Jan-Jun"
            ? [200, 400, 300, 600, 500, 700]
            : [800, 900, 1000, 1100, 1200, 1300],
        backgroundColor: "#16DBCC",
        // borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        maxBarThickness: 20, // Set maximum bar width
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Top Up and Withdraw",
        color: "black",
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide x-axis grid
        },
      },
      y: {
        grid: {
          display: false, // Hide y-axis grid
        },
      },
    },
  };

  return (
    <div>
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          flexDirection: "column",
          gap: 5,
        }}
      >
        <label htmlFor="monthRange" style={{ fontWeight: 600 }}>
          Select Month Range:{" "}
        </label>
        <select
          id="monthRange"
          value={monthRange}
          onChange={(e) =>
            setMonthRange(e.target.value as "Jan-Jun" | "Jul-Dec")
          }
          style={{ width: 200 }}
        >
          <option value="Jan-Jun">January - June</option>
          <option value="Jul-Dec">July - December</option>
        </select>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default TopUpWithdrawChart;
