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
        // "אוגוסט",
        // "ספטמבר",
        // "אוקטובר",
        // "נובמבר",
        // "דצמבר",
      ],
    datasets: [
        {
            label: 'Amount',
            data: [874, 765, 733.2, 520, 601, 349, 207.32],
            fill: false,
            backgroundColor: [
                "rgba(255, 59, 59, 0.2)"
              ],
              pointBackgroundColor: "rgba(255, 59, 59, 0.2)",
              borderColor: [
                "rgba(255, 59, 59, 1)"
              ],
              borderWidth: 1,
              tension: 0.4
        },
    ],
};

const options = {
    scales: {
        y: [
            {
                position:'right',
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
                <p className="value">-170.3%</p>
            </div>
        </div>
        <Line data={data} options={options} />
    </div>
);

export default LoserCoin;
