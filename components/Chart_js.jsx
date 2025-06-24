import React from 'react';
import './Chart_js.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  BubbleController,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import {
  Line,
  Bar,
  Pie,
  Doughnut,
  Radar,
  PolarArea,
  Bubble,
} from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  BubbleController,
  Title,
  Tooltip,
  Legend
);

const labels = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul'];

// Line Chart Data
const lineData = {
  labels,
  datasets: [
    {
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
};

// Bar Chart Data
const barData = {
  labels,
  datasets: [
    {
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)',
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)',
      ],
      borderWidth: 1,
    },
  ],
};

// Radar Chart Data
const radarData = {
  labels: [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running',
  ],
  datasets: [
    {
      label: 'My First Dataset',
      data: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'My Second Dataset',
      data: [28, 48, 40, 19, 96, 27, 100],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)',
    },
  ],
};

// Polar Area Chart
const polarData = {
  labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [11, 16, 7, 3, 14],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)',
      ],
    },
  ],
};

// Pie & Doughnut chart (o'zgarishsiz)
const pieData = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: 'Ranglar',
      data: [300, 50, 100],
      backgroundColor: ['red', 'blue', 'yellow'],
      hoverOffset: 4,
    },
  ],
};

// Stacked Bar Chart
const stackedBarData = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [32, -50, 33, 45, -12, 10, 5],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [44, -22, 17, -5, 24, 33, -8],
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
    },
    {
      label: 'Dataset 3',
      data: [25, 10, 5, 8, 12, -9, -15],
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
    },
  ],
};

const stackedBarOptions = {
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Bar Chart - Stacked',
    },
  },
  responsive: true,
  scales: {
    x: { stacked: true },
    y: { stacked: true },
  },
};

// Bubble Chart
const bubbleData = {
  datasets: [
    {
      label: 'Dataset 1',
      data: [
        { x: 20, y: 30, r: 10 },
        { x: 40, y: 10, r: 15 },
      ],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Dataset 2',
      data: [
        { x: 25, y: 20, r: 8 },
        { x: 35, y: 25, r: 12 },
      ],
      backgroundColor: 'rgba(255, 159, 64, 0.5)',
      borderColor: 'rgb(255, 159, 64)',
    },
  ],
};

const Chart_js = () => {
  return (
    <div className='Chart_js'>
      <div className='chex'>
        <h2>Chart.js</h2>
        <span>Home / Charts / <strong>Chart.js</strong></span>
      </div>
      <div className='morex'>
        <p>Chart.JS Examples. You can check the <span>official website</span> for more examples.</p>
        <div className='mCharts'>
          <div>
            <h2>Line Chart</h2>
            <Line data={lineData} />
          </div>
          <div>
            <h2>Bar Chart</h2>
            <Bar data={barData} />
          </div>
          <div>
            <h2>Pie Chart</h2>
            <Pie data={pieData} />
          </div>
          <div>
            <h2>Doughnut Chart</h2>
            <Doughnut data={pieData} />
          </div>
          <div>
            <h2>Radar Chart</h2>
            <Radar data={radarData} />
          </div>
          <div>
            <h2>Polar Area Chart</h2>
            <PolarArea data={polarData} />
          </div>
          <div>
            <h2>Stacked Bar Chart</h2>
            <Bar data={stackedBarData} options={stackedBarOptions} />
          </div>
          <div>
            <h2>Bubble Chart</h2>
            <Bubble data={bubbleData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart_js;
