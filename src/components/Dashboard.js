import React, { useRef } from 'react';
import Chart from 'chart.js/auto';

function Dashboard() {
  // Use a ref to store the chart instances
  const barChartRef = useRef(null);
  const lineChartRef = useRef(null);

  // Data for the charts
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2, 3, 20],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Revenue',
        data: [12, 19, 3, 5, 2, 3, 20],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Options for the charts
  const options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        },
      }],
    },
  };

  // Initialize the charts
  function initCharts() {
    new Chart(barChartRef.current, {
      type: 'bar',
      data: data,
      options: options,
    });

    new Chart(lineChartRef.current, {
      type: 'line',
      data: data,
      options: options,
    });
  }

  return (
    <div>
      <canvas ref={barChartRef} />
      <canvas ref={lineChartRef} />
    </div>
  );
}

export default Dashboard;
