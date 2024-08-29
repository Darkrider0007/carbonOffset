import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const CarbonOffsetChart: React.FC = () => {
  const data = {
    labels: ["Achieved", "Remaining"],
    datasets: [
      {
        data: [30, 70], // 30% achieved, 70% remaining
        backgroundColor: ["#4BAF47", "#F2F4F7"],
        borderColor: ["#4BAF47", "lightgray"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem: any) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default CarbonOffsetChart;
