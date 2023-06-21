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
  const [value, setValue] = useState({});

  useEffect(() => {
    fetch('http://localhost:8000/clp_test')
      .then( response => {
        if (response.ok){
          return response.json()
        }
        throw response;
      })
      .then(data =>{
        setValue(data)
      })
      .catch(error => {
        console.error("Erro!", error)
      })

    console.log(value[0])
    // const socket = new WebSocket('ws://localhost:8000/ws');
    
    // socket.onmessage = (event) => {
    //   console.log(typeof(event.data))
    // };
    
    // return () => {
    //   socket.close();
    }, []);
  

  return (
    <div>
      <p>{value !== null ? `Valor atual: ${value}` : 'Carregando...'}</p>
      <Chart data = {value}/>
    </div>
  );
}

export default App