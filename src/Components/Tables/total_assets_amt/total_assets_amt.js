import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './total_assets_amt.scss';

import amount_icon from '../../../assets/img/amount.png';

const data = {
    datasets: [
        {
            label: 'Amount',
            data: [50, 87, 5000],
            fill: false,
            backgroundColor: ['rgba(250,3,125,0.5)','rgba(8,76,150,0.5)','rgba(200,50,87,0.5)'],
            borderColor: 'rgb(38,76,125)',
        },
    ],
    labels:[
        'Bitcoin',
        'Quant',
        'MNG'
    ]
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
        <Doughnut data={data} options={options} />
    </div>
);

export default TotalAssetsAmtTable;
