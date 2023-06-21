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
        style={{maxWidth: '200px'}}
        height={500}
        data={props.data}
        margin={{ top: 5,
          right: 30,
          left: 20,
          bottom: 5 }}>
            <CartesianGrid stroke="#3A3737" fill='#2E2E2E'/>
            <XAxis tickLine={false} axisLine={false} type="number" domain={['auto', 'auto']}/>
            <YAxis tickLine={false} axisLine={false} type="category" domain={['auto', 'auto']}/>
            <Tooltip />
            <Legend verticalAlign="top" align='center' wrapperStyle={{position: 'absolute',left:'70px'}} iconType="line"/>
            <Line dataKey="caliper" dot={false} isAnimationActive={false} stroke="#8884d8" />
            <Line dataKey="c2"dot={false} isAnimationActive={false} stroke="#8884d8" />
        </LineChart>
        <LineChart
        layout="vertical"
        syncId="anyId"
        width={500}
        height={500}
        data={props.data}
        margin={{ top: 5,
          right: 30,
          left: 20,
          bottom: 5 }}>
            <CartesianGrid stroke="#3A3737" fill='#2E2E2E'/>
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Legend verticalAlign="top" align='center' wrapperStyle={{position: 'absolute',left:'70px'}} iconType="line"/>
            <Line dataKey="c1" dot={false} isAnimationActive={false} stroke="#8884d8" />
            <Line dataKey="c2" dot={false} isAnimationActive={false} stroke="#8884d8" />
        </LineChart>
    </div>
  );
}