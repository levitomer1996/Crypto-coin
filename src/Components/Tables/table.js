import React from 'react';
import { Bar } from 'react-chartjs-2';
import './table.scss';

const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
        {
            label: '# of Votes',
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

const Table = () => (
    <div className="table">
        <div className='header'>
            <h1 className='title'>Bar Chart</h1>
        </div>
        <Bar data={data} options={options} />
    </div>
);

export default Table;
