import io from 'socket.io-client';
import React from 'react';
import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';
import Chart from './teste'

export async function getStaticProps() {

  const welldata = [
  {
    "hole_depth": 100,
    "bit_diam": 12.25,
    "caliper": 13.234,
    "GR": 36.7,
    "RES": 155.9,
    "Sonic": 53.5,
    "MSE": 16222.4,
    "dxc": 0.30000000000000004,
    "ECD": 18.95,
    "lag_time": 10.4,
    "flow": 35.38,
    "lag_depth": 83,
    "c1": 1428,
    "c2": 888
  },
  {
    "hole_depth": 101,
    "bit_diam": 12.25,
    "caliper": 12.304,
    "GR": 68.31,
    "RES": 51.41,
    "Sonic": 129.81,
    "MSE": 10081.9,
    "dxc": 0.8602,
    "ECD": 12.9505,
    "lag_time": 7.01,
    "flow": 27.22,
    "lag_depth": 87,
    "c1": 275,
    "c2": 1984
  },
  {
    "hole_depth": 102,
    "bit_diam": 12.25,
    "caliper": 12.959,
    "GR": 152.42000000000002,
    "RES": 158.72,
    "Sonic": 189.02,
    "MSE": 3218.9,
    "dxc": 0.5404,
    "ECD": 15.451,
    "lag_time": 5.02,
    "flow": 21.62,
    "lag_depth": 54,
    "c1": 1813,
    "c2": 1731
  },
  {
    "hole_depth": 103,
    "bit_diam": 12.25,
    "caliper": 13.21,
    "GR": 41.33,
    "RES": 45.53,
    "Sonic": 34.230000000000004,
    "MSE": 8266.3,
    "dxc": 0.5406,
    "ECD": 10.0515,
    "lag_time": 4.13,
    "flow": 27,
    "lag_depth": 80,
    "c1": 1053,
    "c2": 820
  },
  {
    "hole_depth": 104,
    "bit_diam": 12.25,
    "caliper": 12.914,
    "GR": 95.04,
    "RES": 104.74000000000001,
    "Sonic": 48.44,
    "MSE": 12526.6,
    "dxc": 0.9108,
    "ECD": 20.052,
    "lag_time": 4.4399999999999995,
    "flow": 36.7,
    "lag_depth": 12,
    "c1": 1100,
    "c2": 1899
  },
  {
    "hole_depth": 105,
    "bit_diam": 12.25,
    "caliper": 13.146,
    "GR": 139.25,
    "RES": 35.25,
    "Sonic": 78.05,
    "MSE": 7700.9,
    "dxc": 0.7010000000000001,
    "ECD": 10.852500000000001,
    "lag_time": 3.25,
    "flow": 30.96,
    "lag_depth": 85,
    "c1": 1479,
    "c2": 951
  },
  {
    "hole_depth": 106,
    "bit_diam": 12.25,
    "caliper": 12.973,
    "GR": 143.86,
    "RES": 128.46,
    "Sonic": 58.660000000000004,
    "MSE": 10776,
    "dxc": 0.7712,
    "ECD": 16.753,
    "lag_time": 9.76,
    "flow": 39.76,
    "lag_depth": 46,
    "c1": 251,
    "c2": 1446
  },
  {
    "hole_depth": 107,
    "bit_diam": 12.25,
    "caliper": 12.567,
    "GR": 46.17,
    "RES": 177.07,
    "Sonic": 196.17,
    "MSE": 8247.1,
    "dxc": 0.6314,
    "ECD": 17.3535,
    "lag_time": 1.77,
    "flow": 30.18,
    "lag_depth": 71,
    "c1": 1872,
    "c2": 1455
  },
  {
    "hole_depth": 108,
    "bit_diam": 12.25,
    "caliper": 13.221,
    "GR": 127.67999999999999,
    "RES": 200.78,
    "Sonic": 90.38,
    "MSE": 3856.2,
    "dxc": 0.5816,
    "ECD": 18.154,
    "lag_time": 6.18,
    "flow": 23.04,
    "lag_depth": 85,
    "c1": 865,
    "c2": 1895
  },
  {
    "hole_depth": 109,
    "bit_diam": 12.25,
    "caliper": 13.052,
    "GR": 55.59,
    "RES": 35.690000000000005,
    "Sonic": 37.49,
    "MSE": 5571.1,
    "dxc": 0.8018000000000001,
    "ECD": 17.9545,
    "lag_time": 6.39,
    "flow": 38.56,
    "lag_depth": 55,
    "c1": 1946,
    "c2": 661
  },
  {
    "hole_depth": 110,
    "bit_diam": 12.25,
    "caliper": 12.934,
    "GR": 165.4,
    "RES": 151.79999999999998,
    "Sonic": 130.79999999999998,
    "MSE": 12423.9,
    "dxc": 0.442,
    "ECD": 17.155,
    "lag_time": 7.9,
    "flow": 35.2,
    "lag_depth": 46,
    "c1": 584,
    "c2": 802
  },
  {
    "hole_depth": 111,
    "bit_diam": 12.25,
    "caliper": 13.028,
    "GR": 31.41,
    "RES": 28.11,
    "Sonic": 116.01,
    "MSE": 14492.1,
    "dxc": 0.4322,
    "ECD": 13.2555,
    "lag_time": 1.4100000000000001,
    "flow": 29.14,
    "lag_depth": 23,
    "c1": 1870,
    "c2": 309
  }
]
return {
  props: {
    welldata,
   fallback: 'blocking'
  }, // will be passed to the page component as props
}
}
const socket = io('http://localhost:3000', {
  transports: ['websocket', 'polling']
});

const App = ({welldata}) => {
  const [data, setData] = useState([]);
  //esse data vai sair daqui e entrar la no teste para poder funcionar acredito eu e o socket tbm?
  // 1. listen for a cpu event and update the state
  useEffect(() => {
    socket.on('cpu', cpuPercent => {
      setData(currentData => [...currentData, cpuPercent]);
    });
  }, []);

  // 2. render the line chart using the state
  return (
    <div>
      <h1>Real Time CPU Usage</h1>
      <Chart />
    </div>
  );
};

export default App