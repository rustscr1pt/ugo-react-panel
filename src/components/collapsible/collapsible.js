import React from "react";
import './collapsible.sass';

const Collapsable_list = () => {
    const unwrap_the_list = (event) => {
        const this_sample = event.target;
        console.log(this_sample.parentNode);
    };

    return (
        <div className="double-collapsible-holder">
            <div className="collapsible-container">
                <button className="collapsible-container__activator" onClick={unwrap_the_list}>Пометки</button>
                <div className="collapsible-container__content">
                    <p>Lorem ipsum...</p>
                </div>
            </div>
            <div className="collapsible-container">
                <button className="collapsible-container__activator" onClick={unwrap_the_list}>Логи</button>
                <div className="collapsible-container__content">
                    <p>Lorem ipsum...</p>
                </div>
            </div>
        </div>
    )
}

export default Collapsable_list;