import React from 'react';
import info_icon from '../../../assets/img/info.png';
import './coin_info.scss';

const CoinInfo = () => {
    return (
        <div className="coin_information">
            <div className='header'>
                <div className='title'>מידע כללי</div>
                <div className="search_input">
                    <img src={info_icon}/>
                    <input type="search"/>           
                 </div>
            </div>
        </div>
    )
}

export default CoinInfo;
