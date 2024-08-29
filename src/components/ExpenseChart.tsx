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

const ExpenseChart: React.FC = () => {
  const [monthRange, setMonthRange] = useState<"Jan-Jul" | "Aug-Dec">(
    "Jan-Jul"
  );

  const data = {
    labels:
      monthRange === "Jan-Jul"
        ? ["January", "February", "March", "April", "May", "June", "July"]
        : ["August", "September", "October", "November", "December"],
    datasets: [
      {
        label: "Expense",
        data:
          monthRange === "Jan-Jul"
            ? [250, 225, 0, 0, 0, 0, 0]
            : [0, 0, 0, 0, 0],
        backgroundColor: "#16DBCC",
        // borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        // borderRadius: 10, // Rounded edges
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
        text: "Token Expenses",
        color: "black",
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide x-axis grid
        },
        // ticks: {
        //   display: false, // Hide x-axis ticks
        // },
      },
      y: {
        grid: {
          display: false, // Hide y-axis grid
        },
        ticks: {
          display: false, // Hide y-axis ticks
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
            setMonthRange(e.target.value as "Jan-Jul" | "Aug-Dec")
          }
          style={{ width: 200 }}
        >
          <option value="Jan-Jul">January - July</option>
          <option value="Aug-Dec">August - December</option>
        </select>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ExpenseChart;
