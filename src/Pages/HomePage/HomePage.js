import React, { useContext } from "react";

import WalletValueTable from "../../Components/Tables/total_wallet_value/total_wallet_value";
import YourCoinsTable from "../../Components/Tables/your_coins/your_coins";
import TotalAssetsAmtTable from "../../Components/Tables/total_assets_amt/total_assets_amt";
import GainerCoin from "../../Components/Tables/gainer/gainer";
import LoserCoin from "../../Components/Tables/loser/loser";
import CoinInfo from "../../Components/Tables/coin_info/coin_info";
import Sidebar from "../../Components/Navbar/navbar";

import Avatar from "./Comps/Avatar";
import AuthContext from "../../Context/AuthContex";

import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="wrapper">
        <section className="advertise"></section>
        <Sidebar />
        <section className="tables">
          <div className="total_wallet_value">
            <WalletValueTable />
          </div>
          <div className="your_coins">
            <YourCoinsTable />
          </div>
          <div className="total_assets_amt">
            <TotalAssetsAmtTable />
          </div>
          <div className="gainer">
            <GainerCoin />
          </div>
          <div className="loser">
            <LoserCoin />
          </div>
          <div className="coin_info">
            <CoinInfo />
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;

// const { authState } = useContext(AuthContext);

{
  /* {authState.user.picture ? (
        <Avatar
          userName={authState.user.name}
          picture={authState.user.picture.data.url}
        />
      ) : null} */
}
