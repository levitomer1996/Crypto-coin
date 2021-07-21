import React from 'react';
import { Line } from 'react-chartjs-2';
import './loser.scss';

import lowest_icon from '../../../assets/img/lowest-price.png';

const data = {
    labels: [
        "ינואר",
        "פברואר",
        "מרץ",
        "אפריל",
        "מאי",
        "יוני",
        "יולי",
        "אוגוסט",
        "ספטמבר",
        "אוקטובר",
        "נובמבר",
        "דצמבר",
      ],
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

const LoserCoin = () => (
    <div className="loser_table">
        <div className='header'>
            <div className='title'>המטבע שהכי ירד</div>
            <div className="ammount">
                <img src={lowest_icon}/>
                <p className="value">80</p>
            </div>
        </div>
        <Line data={data} options={options} />
    </div>
);

export default LoserCoin;
