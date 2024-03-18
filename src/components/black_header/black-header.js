import React from "react";
import './black_header.sass';
import logo from './white_ugo_logo.svg';

const BlackHeader = () => {
    return (
        <div className='black_header__background'>
            <span className='black_header__description'>Контрольная Панель</span>
            <img className='black_header__logo' src={logo} alt=''/>
        </div>
    )
}

export default BlackHeader;