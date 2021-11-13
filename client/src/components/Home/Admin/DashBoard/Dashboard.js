import React from 'react'
import Chart from './Chart/Chart'
import "./style.css"
const chart = "https://datavizcatalogue.com/methods/images/top_images/pie_chart.png"
const barChart = "https://www.metabase.com/learn/images/master-the-bar-chart-visualization/bar-chart.png"
function Dashboard() {
    return (
        <div className="mainDashboard">
            <div className="pieChart">
            <Chart />
            <img src={chart} height="250px" width="400px" alt="PieChart" />
            </div>
            <div className="barChart">
                <img src={barChart} height="250px" width="400px" alt="barChart" />

            </div>
            
        </div>
    )
}

export default Dashboard
