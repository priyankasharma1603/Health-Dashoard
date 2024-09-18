// src/components/LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement);

function LineChart({ records }) {
  const data = {
    labels: records.map(record => record.date),
    datasets: [
      {
        label: 'Body Temperature (°C)',
        data: records.map(record => record.bodyTemp),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.1,
      },
      {
        label: 'Heart Rate (BPM)',
        data: records.map(record => record.heartRate),
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
        tension: 0.1,
      }
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: 'white', // Change legend text color to white
        },
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
          }
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
          color: 'white', // Change x-axis title color to white
        },
        ticks: {
          color: 'white', // Change x-axis ticks color to white
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Metrics',
          color: 'white', // Change y-axis title color to white
        },
        ticks: {
          color: 'white', // Change y-axis ticks color to white
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)', // Optional: change grid color
        },
      },
    },
  };

  return (
    <div className="line-chart-container">
      <Line data={data} options={options} />
    </div>
  );
}

export default LineChart;
