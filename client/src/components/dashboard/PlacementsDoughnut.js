import React from 'react'
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import {Doughnut} from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const PlacementsDoughnut = () => {
    const data = {
        labels: ['Red'],
        datasets: [
            {
                label: 'Placement Percentage',
                data: [65, 35],
                backgroundColor: ['#623aea', '#f1effb'],
                borderWidth: 1,
            },
        ],
    }
    return (
        <div className="col-4 my-3 p-4 bg-white subtle-shadow rounded">
            <h4>Placements</h4>
            <div className="mx-auto">
                <Doughnut
                    data={data}
                    options={{
                        responsive: true,
                        maintainAspectRatio: true,
                        tooltips: {enabled: false},
                        legend: {display: false},
                        title: {display: true, text: 'Açılan Oylar'},
                    }}
                />
            </div>
        </div>
    )
}

export default PlacementsDoughnut
