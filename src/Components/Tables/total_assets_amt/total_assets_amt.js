import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './total_assets_amt.scss';

import amount_icon from '../../../assets/img/amount.png';

const data = {
    datasets: [
        {
            data: [50, 87, 320],
            fill: true,
            backgroundColor: ['#ffea00','#ec407a','#039be5'],
            borderColor: 'rgba(38,76,125,0.2)',
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
        y: {
            legend:{
                rtl:true,
                reverse:true
            },
            position:'right',
            beginAtZero: true,
           
        },
    },
};

const TotalAssetsAmtTable = () => (
    <div className="total_assets">
        <div className='header'>
            <div className='title'>פילוח מטבעות</div>
            <div className="ammount">
                <img src={amount_icon}/>
                <p className="value">80</p>
            </div>
        </div>
        <Doughnut data={data} options={options} />
    </div>
);

export default TotalAssetsAmtTable;
