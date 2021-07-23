import React from "react";
import { Bar } from "react-chartjs-2";
import "./total_wallet_value.scss";

import dollar_icon from "../../../assets/img/dollar2.png";

const data = {
  labels: [
    "ינואר",
    "פברואר",
    "מרץ",
    "אפריל",
    "מאי",
    "יוני",
    // "יולי",
    // "אוגוסט",
    // "ספטמבר",
    // "אוקטובר",
    // "נובמבר",
    // "דצמבר",
  ],
  datasets: [
    {
      label: "USD",
      data: [
        1000, 300, 6000, 500, 520, 8500,
        // 0,
        // 0,
        // 0,
        // 0,
        // 0,
        // 0,
      ],
      backgroundColor: ["rgba(11,184,157,0.2)"],
      borderColor: ["rgba(11,184,157,1)"],
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    y: {
      position: "right",
      beginAtZero: true,
    },
    x: {
      rtl: true,
      reverse: true,
    },
  },
};

const WalletValueTable = () => (
  <div className="total_wallet_value_table">
    <div className="header">
      <div className="title">שווי הארנק שלי</div>
      <div className="ammount">
        <img src={dollar_icon} />
        <p className="value">350.642$</p>
      </div>
      <h2 className="centered_value">350.642$</h2>
    </div>
    <Bar
      className="table"
      data={data}
      options={options}
      style={{ direction: "rtl" }}
    />
  </div>
);

export default WalletValueTable;
