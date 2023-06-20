import {useState,useEffect, useRef} from 'react'
import { styled } from "../stitches.config";
import {LineChart,
  CartesianGrid,
  YAxis,
  Tooltip,
  Legend,
  Line,
  XAxis} from 'recharts'

  const LegendWrapper = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    overflowX: 'scroll',
    overflowY: 'none',

    padding: '5px',
    width: '90%',
    marginBottom: '5px',
  
    '&::-webkit-scrollbar': {
        width: '14px'
    },
    '&::-webkit-scrollbar-track': {
        background: 'transparent',
    },

    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '$bgTrack',
        borderRadius: '8px',
        border: '6px solid $bgCard'
    },
    '&::-webkit-scrollbar-corner': {
        background: 'transparent',
    }
    
});

const LegendItem = styled('div',{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5px', 
    backgroundColor:'$bgTrack', 
    height: '35px', 
    px: '10px',
  
    marginLeft: '5px'
  
  })
  
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

function Chart() {
  const renderLegend = (props) => {
    const { payload } = props;
  
    return (
        <LegendWrapper >
        {
          payload.map((entry, index) => (
            <LegendItem key={`item-${index}`} style={{borderLeft: `6px solid ${entry.color}`}}>
                <div style={{display:'inline'}}>
                  <h4 style={{fontWeight: 600, margin: 0 }}>{entry.value.toUpperCase()}</h4>
                  <h6 style={{margin: 0}}>{parseFloat(data[data.length-1][`${entry.value}`])}</h6>
                </div>
            </LegendItem>
          ))
        }
      </LegendWrapper>
    );
  }


  return (
    <div>
        <LineChart 
        layout="vertical" 
        syncId="anyId" 
        width={500} 
        height={500} 
        data={data}
        margin={{ top: 5, 
                  right: 30, 
                  left: 20, 
                  bottom: 5 }}>

            <CartesianGrid stroke="#3a3737" fill='#2E2E2E'/>

          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Legend verticalAlign="top" align='center' wrapperStyle={{position: 'absolute',left:'70px'}} iconType="line" content={renderLegend}/>
            <Line dataKey="Y" stroke="#8884d8" />

        </LineChart>
    </div>
  );
}

export default Chart;
