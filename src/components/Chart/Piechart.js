import React from 'react'
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"
const Piechart = ({charData}) => {
  return (
    <>
    <Pie data={charData}/>
    </>
  )
}

export default Piechart