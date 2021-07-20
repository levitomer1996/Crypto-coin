import React from 'react';
import { Bar } from 'react-chartjs-2';
import './total_assets_amt.scss';

import amount_icon from '../../assets/img/amount.png';

const data = {
    labels: ['Coins'],
    datasets: [
        {
            label: 'Amount',
            data: [12, 19, 3, 5, 2, 3],
            fill: false,
            backgroundColor: 'rgba(38,76,125,0.5)',
            borderColor: 'rgb(38,76,125)',
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

const TotalAssetsAmtTable = () => (
    <div className="total_assets">
        <div className='header'>
            <div className='title'>Total Assets Amount</div>
            <div className="ammount">
                <img src={amount_icon}/>
                <p className="value">80</p>
            </div>
        </div>
        <Bar data={data} options={options} />
    </div>
);

export default TotalAssetsAmtTable;
