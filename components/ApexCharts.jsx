import React from 'react';
import './ApexCharts.css';
import ReactApexChart from 'react-apexcharts';

const ApexCharts = () => {
  // Example data for area chart (to replace undefined "series" reference)
  const stockData = {
    monthDataSeries1: {
      prices: [34, 44, 54, 21, 12, 43, 33, 23, 66],
      dates: [
        "2018-09-19", "2018-09-20", "2018-09-21",
        "2018-09-22", "2018-09-23", "2018-09-24",
        "2018-09-25", "2018-09-26", "2018-09-27"
      ]
    }
  };

  // BASIC LINE CHART
  const lineOptions = {
    chart: { id: 'basic-line' },
    stroke: { curve: 'straight' },
    xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'] },
    title: { text: 'Product Trends by Month', align: 'left' },
    grid: { row: { colors: ['#f3f3f3', 'transparent'], opacity: 0.5 } }
  };
  const lineSeries = [{ name: 'Desktops', data: [10, 41, 35, 51, 49, 62, 69, 91, 148] }];

  // BASIC AREA CHART
  const areaOptions = {
    chart: { id: 'basic-area', type: 'area', height: 350, zoom: { enabled: false } },
    dataLabels: { enabled: false },
    stroke: { curve: 'straight' },
    title: { text: 'Fundamental Analysis of Stocks', align: 'left' },
    subtitle: { text: 'Price Movements', align: 'left' },
    xaxis: { type: 'datetime', categories: stockData.monthDataSeries1.dates },
    yaxis: { opposite: true },
    legend: { horizontalAlign: 'left' }
  };
  const areaSeries = [{
    name: "STOCK ABC",
    data: stockData.monthDataSeries1.prices
  }];

  // BASIC COLUMN CHART
  const columnOptions = {
    chart: { type: 'bar', height: 350 },
    plotOptions: { bar: { horizontal: false, columnWidth: '55%', borderRadius: 5, borderRadiusApplication: 'end' } },
    dataLabels: { enabled: false },
    stroke: { show: true, width: 2, colors: ['transparent'] },
    xaxis: { categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'] },
    yaxis: { title: { text: '$ (thousands)' } },
    fill: { opacity: 1 },
    tooltip: { y: { formatter: val => `$ ${val} thousands` } }
  };
  const columnSeries = [
    { name: 'Net Profit', data: [44, 55, 57, 56, 61, 58, 63, 60, 66] },
    { name: 'Revenue', data: [76, 85, 101, 98, 87, 105, 91, 114, 94] },
    { name: 'Free Cash Flow', data: [35, 41, 36, 26, 45, 48, 52, 53, 41] }
  ];

  // BASIC BAR CHART
  const barOptions = {
    chart: { type: 'bar', height: 350 },
    plotOptions: { bar: { borderRadius: 4, borderRadiusApplication: 'end', horizontal: true } },
    dataLabels: { enabled: false },
    xaxis: { categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'Germany'] }
  };
  const barSeries = [{ data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380] }];

  // SIMPLE PIE CHART
  const pieOptions = { labels: ['Team A', 'Team B', 'Team C', 'Team D'] };
  const pieSeries = [44, 55, 13, 43];

  // DONUT CHART
  const donutOptions = { labels: ['Team A', 'Team B', 'Team C', 'Team D'] };
  const donutSeries = [44, 55, 13, 43];

  // BASIC RADAR CHART
  const radarOptions = {
    chart: { height: 350, type: 'radar' },
    title: { text: 'Basic Radar Chart' },
    yaxis: { stepSize: 20 },
    xaxis: { categories: ['January', 'February', 'March', 'April', 'May', 'June'] }
  };
  const radarSeries = [{ name: 'Series 1', data: [80, 50, 30, 40, 100, 20] }];

  // BASIC POLAR AREA CHART
  const polarAreaOptions = {
    chart: { id: 'polar-area', type: 'polarArea' },
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    fill: { opacity: 0.8 },
    stroke: { width: 1 },
    responsive: [{ breakpoint: 480, options: { chart: { width: 200 }, legend: { position: 'bottom' } } }]
  };
  const polarAreaSeries = [14, 23, 21, 17, 15, 24, 26];

  // MULTIPLE RADIAL BARS
  const radialOptions = {
    chart: { id: 'multiple-radialbars', type: 'radialBar' },
    plotOptions: {
      radialBar: {
        dataLabels: {
          total: {
            show: true,
            label: 'TOTAL',
            formatter: () => 249
          }
        }
      }
    },
    labels: ['Apples', 'Oranges', 'Bananas', 'Berries']
  };
  const radialSeries = [44, 55, 67, 83];

  // SIMPLE BUBBLE CHART
  const bubbleOptions = {
    chart: { id: 'simple-bubble', type: 'bubble' },
    dataLabels: { enabled: false },
    xaxis: { tickAmount: 12 }
  };
  const bubbleSeries = [
    {
      name: 'Bubble1',
      data: [
        { x: 10, y: 20, z: 15 },
        { x: 15, y: 25, z: 20 },
        { x: 20, y: 30, z: 25 },
        { x: 25, y: 35, z: 30 }
      ]
    }
  ];

  return (
    <div className="ApexCharts">
      <div className="apex">
        <h2>ApexCharts</h2>
        <span>Home / Charts / <strong>ApexCharts</strong></span>
      </div>
      <div className="apmorex">
        <p>ApexCharts Examples. You can check the <span>official website</span> for more examples.</p>
        <div className="apmCharts">
          <div>
            <h2>Line Chart</h2>
            <ReactApexChart options={lineOptions} series={lineSeries} type="line" height={300} />
          </div>
          <div>
            <h2>Area Chart</h2>
            <ReactApexChart options={areaOptions} series={areaSeries} type="area" height={300} />
          </div>
          <div>
            <h2>Column Chart</h2>
            <ReactApexChart options={columnOptions} series={columnSeries} type="bar" height={300} />
          </div>
          <div>
            <h2>Bar Chart</h2>
            <ReactApexChart options={barOptions} series={barSeries} type="bar" height={300} />
          </div>
          <div>
            <h2>Pie Chart</h2>
            <ReactApexChart options={pieOptions} series={pieSeries} type="pie" height={300} />
          </div>
          <div>
            <h2>Donut Chart</h2>
            <ReactApexChart options={donutOptions} series={donutSeries} type="donut" height={300} />
          </div>
          <div>
            <h2>Radar Chart</h2>
            <ReactApexChart options={radarOptions} series={radarSeries} type="radar" height={300} />
          </div>
          <div>
            <h2>Polar Area Chart</h2>
            <ReactApexChart options={polarAreaOptions} series={polarAreaSeries} type="polarArea" height={300} />
          </div>
          <div>
            <h2>Radial Bar Chart</h2>
            <ReactApexChart options={radialOptions} series={radialSeries} type="radialBar" height={300} />
          </div>
          <div>
            <h2>Bubble Chart</h2>
            <ReactApexChart options={bubbleOptions} series={bubbleSeries} type="bubble" height={300} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApexCharts;
