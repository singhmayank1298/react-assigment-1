import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css'

const Chart= (props)=>{
    const dataPointValue = props.dataPoints.map((dataPoint) => {
    return    dataPoint.value})
        //console.log(dataPointValue)
    const totalMaximum = Math.max(...dataPointValue)
    console.log(totalMaximum)
 return  <div className="chart">
 {props.dataPoints.map(dataPoint=> <ChartBar  key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label}/>)}
 </div>
}

export default Chart;