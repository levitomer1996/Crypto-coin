import React from 'react';
import { Bar } from 'react-chartjs-2';
import './total_coin_value.scss';

const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
        {
            label: 'USD',
            data: [12, 19, 3, 5, 2, 3],
            fill: true,
            backgroundColor: '#254550',
            borderColor: '#417A7D',
        },
    ],
};

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};

const CoinValueTable = () => (
    <div className="table">
        <div className='header'>
            <h1 className='title'>Total Crypto Value</h1>
        </div>
        <Bar data={data} options={options} />
    </div>
);

export default CoinValueTable;
