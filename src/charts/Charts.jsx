import React from 'react';
import { LineChart } from '@ant-design/charts';
import '@ant-design/charts/dist/chart.css';

const MyLineChart = () => {
  const data = [
    { year: '2001', value: 3 },
    { year: '2002', value: 4 },
    { year: '2003', value: 3.5 },
    { year: '2004', value: 5 },
    { year: '2005', value: 4.9 },
    { year: '2006', value: 6 },
    { year: '2007', value: 7 },
    { year: '2008', value: 9 },
    { year: '2009', value: 13 },
  ];

  const config = {
    data,
    xField: 'year',
    yField: 'value',
    height: 400,
  };

  return <LineChart {...config} />;
};

export default MyLineChart;



