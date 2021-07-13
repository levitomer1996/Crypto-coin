import React from "react";

import CoinValueTable from '../../Components/Tables/total_coin_value';
import YourCoinsTable from '../../Components/Tables/your_coins';
import TotalAssetsAmtTable from '../../Components/Tables/total_assets_amt';

import "./HomePage.scss";

const HomePage = () => {
  return (

    <div className="homepage">

      <div className="wrapper">
        <section className="advertise">

        </section>
        <section className="sidebar">
          Sidebar
        </section>
        <section className="tables">
          <div className="total_coin_value">
            <CoinValueTable />
          </div>
          <div className="your_coins">
            <YourCoinsTable />
          </div>
          <div className="total_assets_amt">
            <TotalAssetsAmtTable />
          </div>
        </section>
        
      </div>
    </div>

  );
};

export default HomePage;
