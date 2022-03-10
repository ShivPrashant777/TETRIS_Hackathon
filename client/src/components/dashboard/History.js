import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import {Bar} from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const History = () => {
    const dataOnBar = []
    for (let i = 1; i <= 10; i++) {
        dataOnBar.push(i)
    }
    console.log('dataonBar', dataOnBar)

    const options = {
        responsive: true,
        tooltips: {enabled: false},
        legend: {
            display: false,
        },
        scales: {
            scales: {
                xAxes: [
                    {
                        gridLines: {
                            color: 'rgba(0, 0, 0, 0)',
                        },
                    },
                ],
                yAxes: [
                    {
                        gridLines: {
                            color: 'rgba(0, 0, 0, 0)',
                        },
                    },
                ],
            },
        },
    }

    let barData = {
        labels: dataOnBar.map((val, i) => i),
        datasets: [
            {
                backgroundColor: '#d2a7ff',
                hoverBackgroundColor: '#5932ea',
                data: dataOnBar,
            },
        ],
    }

    return (
        <div className="col-7 my-3 p-4 bg-white subtle-shadow rounded">
            <h4>History</h4>
            <div className="mx-auto">
                <Bar data={barData} options={options} />
            </div>
        </div>
    )
}

export default History
