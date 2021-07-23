import React from 'react';
import './your_coins.scss';

import bitcoin from '../../../assets/images/bitcoin.png';
import piggy from '../../../assets/images/piggy.png';

const YourCoinsTable = () => (
    <div className="your_coins_table">
        <div className='header'>
            <div className='title'>המטבעות שלי</div>
            <button type="button" className="add_coin">מטבע חדש</button>
        </div>
        
        <table className="table">
            <tr>
                <th></th>
                <th>שם</th>
                <th>שווי</th>
                <th>שינוי יומי</th>
                <th>כמות</th>
                <th>רווח/הפסד</th>
            </tr>
            <tr>
                <td><img src={bitcoin} width="20" height="20"/></td>
                <td>Bitcoin</td>
                <td>30,000$</td>
                <td>+2.4%</td>
                <td>3</td>
                <td id="lp" style={{color:"#05aa6b"}}>+3%</td>
            </tr>
            <tr>
                <td><img src={piggy} width="20" height="20"/></td>
                <td>PiggyBankToken</td>
                <td>0.000000087</td>
                <td>-100%</td>
                <td>1</td>
                <td id="lp" style={{color:"rgb(255, 59, 59)"}}>-52%</td>
            </tr>
        </table>
    </div>
);

export default YourCoinsTable;
