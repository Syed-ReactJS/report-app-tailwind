import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "REPORTS STATS ",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June"];

export const data = {
  labels,
  datasets: [
    {
      label: "Half Yearly Records",
      data: labels.map(() => Math.random() * 100),
      backgroundColor: "rgb(255, 177, 193,0.8)",
    },
  ],
};

const BarChart = () => {
  return (
    <div className="bg-white rounded-lg">
      <Bar options={options} data={data} />
    </div>
  );
};

export default BarChart;
