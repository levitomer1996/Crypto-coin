import React from 'react';
import { Line } from 'react-chartjs-2';
import './gainer.scss';

import top_icon from '../../../assets/img/top-rated.png';

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

const GainerCoin = () => (
    <div className="gainer_table">
        <div className='header'>
            <div className='title'>המטבע שהכי עלה</div>
            <div className="ammount">
                <img src={top_icon}/>
                <p className="value">80</p>
            </div>
        </div>
        <Line data={data} options={options} />
    </div>
);

export default GainerCoin;
