import React from 'react'
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"
const Linegraph = ({charData}) => {
  return (
    <>
    <Line data={charData}/>
    </>
  )
}

export default Linegraph