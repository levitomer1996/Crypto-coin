import React from 'react';
import { Bar } from 'react-chartjs-2';
import './total_coin_value.scss';

import dollar_icon from '../../../assets/img/dollar2.png';

const data = {
    labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    datasets: [
        {
            label: "USD",
            data: [
            1000,
            300,
            6000,
            500,
            520,
            8500,
            0,
            0,
            0,
            0,
            0,
            0,
            ],
            backgroundColor: [
              "rgba(11,184,157,0.2)"
            ],
            borderColor: [
              "rgba(11,184,157,1)"
            ],
            borderWidth: 1,
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
    <div className="total_crypto_value ">
        <div className='header'>
            <div className='title'>Total Crypto Value</div>
            <div className="ammount">
                <img src={dollar_icon}/>
                <p className="value">350.642$</p>
            </div>
            <h2 className="centered_value">350.642$</h2>
        </div>
        <Bar className="table" data={data} options={options} />
    </div>
);

export default CoinValueTable;
