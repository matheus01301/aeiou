import {useState,useEffect, useRef} from 'react'
import { styled } from "../stitches.config";
import {LineChart,
  CartesianGrid,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
  XAxis} from 'recharts'

export default function Chart({...props}) {
  
  
  return (
    <div>
        <LineChart 
        layout="vertical" 
        syncId="anyId" 
        width={500} 
        height={500} 
        data={props.welldata}
        margin={{ top: 5, 
                  right: 30, 
                  left: 20, 
                  bottom: 5 }}>

            <CartesianGrid stroke="#3a3737" fill='#2E2E2E'/>

          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Legend verticalAlign="top" align='center' wrapperStyle={{position: 'absolute',left:'70px'}} iconType="line"/>
            <Line dataKey="c2" stroke="#8884d8" />

        </LineChart>
        
        <LineChart 
        layout="vertical" 
        syncId="anyId" 
        width={500} 
        height={500} 
        data={props.welldata}
        margin={{ top: 5, 
          right: 30, 
          left: 20, 
          bottom: 5 }}>

            <CartesianGrid stroke="#3a3737" fill='#2E2E2E'/>

          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Legend verticalAlign="top" align='center' wrapperStyle={{position: 'absolute',left:'70px'}} iconType="line"/>
            <Line dataKey="Sonic" stroke="#8884d8" />

        </LineChart>
    </div>
  );
}
