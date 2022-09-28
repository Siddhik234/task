
import './App.css';
import { Home } from './component/Home';


import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
} from 'chart.js';

import React,{useState} from 'react';
import { Tabs,Tab } from "@mui/material";
import { Onlinesales } from './component/0nlinesales';
import { Athomesales } from './component/Athomesales';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);




function App() {
  const[val,setVal]=useState("") 
  return (
    <React.Fragment>
      
   <Tabs value={val} onChange={(e,value)=>setVal(value)}>
                <Tab label="Revenue Share Online / offline" value="online"/>
                <Tab label="Revenue at Home and Out of Home" value="Home"/>
              
            </Tabs>
            {val==="online" && <Onlinesales/>}
            {val==="Home" && <Athomesales/>} 
            <div>
    <Home/>
   </div>
            
      
   </React.Fragment>
  );
}

export default App;
