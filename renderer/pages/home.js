import React from 'react';
import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';
import Chart from './teste'
import {
  BarChart,
  Bar,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts';
import { styled } from "./../stitches.config";



export async function getStaticProps() {
  const welldata = [
    {
      "hole_depth": 0,
      "bit_diam": 0,
      "caliper": 0,
      "GR": 0,
      "RES": 0,
      "Sonic": 11110,
      "MSE": 0,
      "dxc": 0,
      "ECD": 0,
      "lag_time": 0,
      "flow": 0,
      "lag_depth": 0,
      "c1": 0,
      "c2": 10
    }
  ];
  return {
    props: {
      welldata,
    }, // will be passed to the page component as props
  }
}
function App() {
  const [value, setValue] = useState([]);
  useEffect(() => {
    const fetchValue = async () => {
      try {
        const response = await fetch('http://localhost:8000/clp_test');
        const newValue = await response.json();
        //setValue(jsonValue);
        const maxValueSize = 10;

        setValue(prevValue => {
          // Verifica o tamanho atual dos dados
          if (prevValue.length >= maxValueSize) {
            // Remove o primeiro elemento do array de dados
            return prevValue.slice(1);
          }
          // Adiciona o novo dado ao final do array de dados
          return [...prevValue, newValue];
        });
      } catch (error) {
        console.error('Erro:', error);
      }
      // const socket = new WebSocket('ws://localhost:8000/ws');
      // socket.onmessage = (event) => {
      //   console.log(typeof(event.data))
      // };
      // return () => {
      //   socket.close();
    };
    //fetchValue();
    const interval = setInterval(fetchValue, 500);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <Chart data={value} />
    </div>
  );
}
export default App;