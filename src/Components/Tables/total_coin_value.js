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
    <div className="total_crypto_value">
        <div className='header'>
            <div className='title'>Total Crypto Value</div>
            <p className="ammount">350.642$</p>
        </div>
        <Bar className="table" data={data} options={options} />
    </div>
);

export default CoinValueTable;
