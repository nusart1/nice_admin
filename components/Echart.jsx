import React from 'react';
import './Echart.css';

import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  PolarComponent,
  RadarComponent,
  DatasetComponent,
} from 'echarts/components';
import {
  LineChart,
  BarChart,
  PieChart,
  RadarChart,
  CandlestickChart,
  ScatterChart,
} from 'echarts/charts';
import {
  CanvasRenderer
} from 'echarts/renderers';

echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  PolarComponent,
  RadarComponent,
  DatasetComponent,
  LineChart,
  BarChart,
  PieChart,
  RadarChart,
  CandlestickChart,
  ScatterChart,
  CanvasRenderer,
]);

const EChart = () => {
  // Line Chart
  const lineOption = {
    title: { text: 'Line Chart Example' },
    tooltip: { trigger: 'axis' },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      boundaryGap: false,
      axisLine: { lineStyle: { color: '#999' } }
    },
    yAxis: {
      type: 'value',
      axisLine: { lineStyle: { color: '#999' } },
      splitLine: { lineStyle: { type: 'dashed' } }
    },
    series: [{
      name: 'Sales',
      type: 'line',
      smooth: true,
      data: [150, 230, 224, 218, 135, 147],
      lineStyle: { width: 3 },
      itemStyle: { color: '#5470C6' }
    }]
  };

  // Area Chart (Line chart with areaStyle)
  const areaOption = {
    title: { text: 'Area Chart Example' },
    tooltip: { trigger: 'axis' },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      boundaryGap: false,
      axisLine: { lineStyle: { color: '#999' } }
    },
    yAxis: {
      type: 'value',
      axisLine: { lineStyle: { color: '#999' } },
      splitLine: { lineStyle: { type: 'dashed' } }
    },
    series: [{
      name: 'Expenses',
      type: 'line',
      smooth: true,
      data: [120, 200, 150, 80, 70, 110],
      areaStyle: { color: 'rgba(84,112,198,0.3)' },
      itemStyle: { color: '#5470C6' },
      lineStyle: { width: 3 }
    }]
  };

  // Bar Chart (Horizontal)
  const barOption = {
    title: { text: 'Bar Chart Example' },
    tooltip: { trigger: 'axis' },
    xAxis: {
      type: 'value',
      axisLine: { lineStyle: { color: '#999' } },
      splitLine: { show: false }
    },
    yAxis: {
      type: 'category',
      data: ['South Korea', 'Canada', 'UK', 'Netherlands', 'Italy', 'France'],
      axisLine: { lineStyle: { color: '#999' } }
    },
    series: [{
      type: 'bar',
      data: [400, 430, 448, 470, 540, 580],
      itemStyle: { borderRadius: 5, color: '#91CC75' }
    }]
  };

  // Vertical Bar Chart (Column)
  const verticalBarOption = {
    title: { text: 'Vertical Bar Chart' },
    tooltip: { trigger: 'axis' },
    xAxis: {
      type: 'category',
      data: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      axisLine: { lineStyle: { color: '#999' } }
    },
    yAxis: {
      type: 'value',
      axisLine: { lineStyle: { color: '#999' } },
      splitLine: { lineStyle: { type: 'dashed' } }
    },
    series: [{
      type: 'bar',
      data: [22, 28, 25, 30, 32, 34],
      itemStyle: { borderRadius: 5, color: '#EE6666' }
    }]
  };

  // Pie Chart
  const pieOption = {
    title: { text: 'Pie Chart Example', left: 'center' },
    tooltip: { trigger: 'item' },
    legend: { orient: 'vertical', left: 'left' },
    series: [{
      name: 'Teams',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 44, name: 'Team A' },
        { value: 55, name: 'Team B' },
        { value: 13, name: 'Team C' },
        { value: 43, name: 'Team D' }
      ],
      emphasis: {
        itemStyle: { shadowBlur: 10, shadowColor: 'rgba(0,0,0,0.5)' }
      },
      label: { fontSize: 14 }
    }]
  };

  // Donut Chart (Pie with innerRadius)
  const donutOption = {
    title: { text: 'Donut Chart Example', left: 'center' },
    tooltip: { trigger: 'item' },
    legend: { orient: 'vertical', left: 'left' },
    series: [{
      name: 'Teams',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      data: [
        { value: 44, name: 'Team A' },
        { value: 55, name: 'Team B' },
        { value: 13, name: 'Team C' },
        { value: 43, name: 'Team D' }
      ],
      emphasis: {
        itemStyle: { shadowBlur: 10, shadowColor: 'rgba(0,0,0,0.5)' }
      },
      label: { show: false },
      labelLine: { show: false }
    }]
  };

  // Radar Chart
  const radarOption = {
    title: { text: 'Radar Chart Example' },
    tooltip: {},
    radar: {
      radius: '60%',
      indicator: [
        { name: 'Eating', max: 100 },
        { name: 'Drinking', max: 100 },
        { name: 'Sleeping', max: 100 },
        { name: 'Designing', max: 100 },
        { name: 'Coding', max: 100 },
        { name: 'Cycling', max: 100 },
        { name: 'Running', max: 100 }
      ],
      axisLine: { lineStyle: { color: '#ccc' } },
      splitLine: { lineStyle: { color: '#bbb' } },
      splitArea: { show: false }
    },
    series: [{
      name: 'Activities',
      type: 'radar',
      data: [{
        value: [65, 59, 90, 81, 56, 55, 40],
        name: 'Series 1',
        areaStyle: { color: 'rgba(255, 0, 0, 0.3)' }
      }],
      lineStyle: { width: 2 },
      itemStyle: { color: '#ff4d4f' }
    }]
  };

  // Polar Area Chart
  const polarAreaOption = {
    title: { text: 'Polar Area Chart Example', left: 'center' },
    angleAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisLine: { lineStyle: { color: '#999' } }
    },
    radiusAxis: {},
    polar: {},
    series: [{
      type: 'bar',
      data: [14, 23, 21, 17, 15, 24, 26],
      coordinateSystem: 'polar',
      name: 'Monday',
      stack: 'a',
      itemStyle: { color: '#FAC858' }
    }],
    legend: { show: true }
  };

  // Candle Stick Chart
  const candleStickOption = {
    title: { text: 'Candle Stick Chart Example' },
    tooltip: { trigger: 'axis', axisPointer: { type: 'cross' } },
    xAxis: {
      type: 'category',
      data: ['2025-06-19', '2025-06-20', '2025-06-21', '2025-06-22', '2025-06-23'],
      boundaryGap: false,
      axisLine: { lineStyle: { color: '#999' } }
    },
    yAxis: {
      scale: true,
      axisLine: { lineStyle: { color: '#999' } },
      splitLine: { lineStyle: { type: 'dashed' } }
    },
    series: [{
      type: 'candlestick',
      data: [
        [20, 30, 10, 35],
        [40, 35, 30, 55],
        [33, 38, 33, 40],
        [40, 40, 32, 42],
        [42, 45, 40, 48]
      ],
      itemStyle: {
        color: '#ec0000',
        color0: '#00da3c',
        borderColor: '#8A0000',
        borderColor0: '#008F28'
      }
    }]
  };

  // Bubble Chart
  const bubbleOption = {
    title: { text: 'Bubble Chart Example' },
    tooltip: { 
      trigger: 'item', 
      formatter: params => `X: ${params.data[0]}<br/>Y: ${params.data[1]}<br/>Size: ${params.data[2]}` 
    },
    xAxis: {
      splitLine: { lineStyle: { type: 'dashed' } },
      axisLine: { lineStyle: { color: '#999' } }
    },
    yAxis: {
      splitLine: { lineStyle: { type: 'dashed' } },
      axisLine: { lineStyle: { color: '#999' } }
    },
    series: [{
      type: 'scatter',
      symbolSize: function (data) { return data[2] * 2; },
      data: [
        [10, 20, 15],
        [15, 25, 20],
        [20, 30, 25],
        [25, 35, 30]
      ],
      itemStyle: { color: '#73C0DE' }
    }]
  };

  return (
    <div className='EChart'>
      <div className='echex'>
        <h2>ECharts</h2>
        <span>Home / Charts / <strong>ECharts</strong></span>
      </div>
      <div className='ecmorex'>
        <p>ECharts Examples. You can check the <strong>official website</strong> for more examples.</p>
        <div className='ecmCharts'>
          <div>
            <h2>Line Chart</h2>
            <ReactECharts option={lineOption} style={{ height: 300 }} />
          </div>
          <div>
            <h2>Area Chart</h2>
            <ReactECharts option={areaOption} style={{ height: 300 }} />
          </div>
          <div>
            <h2>Bar Chart</h2>
            <ReactECharts option={barOption} style={{ height: 300 }} />
          </div>
          <div>
            <h2>Vertical Bar Chart</h2>
            <ReactECharts option={verticalBarOption} style={{ height: 300 }} />
          </div>
          <div>
            <h2>Pie Chart</h2>
            <ReactECharts option={pieOption} style={{ height: 300 }} />
          </div>
          <div>
            <h2>Donut Chart</h2>
            <ReactECharts option={donutOption} style={{ height: 300 }} />
          </div>
          <div>
            <h2>Radar Chart</h2>
            <ReactECharts option={radarOption} style={{ height: 300 }} />
          </div>
          <div>
            <h2>Polar Area Chart</h2>
            <ReactECharts option={polarAreaOption} style={{ height: 300 }} />
          </div>
          <div>
            <h2>Candle Stick Chart</h2>
            <ReactECharts option={candleStickOption} style={{ height: 300 }} />
          </div>
          <div>
            <h2>Bubble Chart</h2>
            <ReactECharts option={bubbleOption} style={{ height: 300 }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EChart;
