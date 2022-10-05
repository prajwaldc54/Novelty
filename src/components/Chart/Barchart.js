/* eslint-disable no-unused-vars */
import React from 'react'
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"

const Barchart = ({charData}) => {
  return (
    <>
    <Bar data={charData}/>
    </>
  )
}

export default Barchart