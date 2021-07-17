import React, { useContext } from "react";

import CoinValueTable from "../../Components/Tables/total_coin_value";
import YourCoinsTable from "../../Components/Tables/your_coins";
import TotalAssetsAmtTable from "../../Components/Tables/total_assets_amt";
import Avatar from "./Comps/Avatar";
import AuthContext from "../../Context/AuthContex";

import "./HomePage.scss";

const HomePage = () => {
  const { authState } = useContext(AuthContext);
  return (
    <div className="homepage">
      {authState.user.picture ? (
        <Avatar
          userName={authState.user.name}
          picture={authState.user.picture.data.url}
        />
      ) : null}
      <div className="wrapper">
        <section className="advertise"></section>
        <section className="sidebar">Sidebar</section>
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
