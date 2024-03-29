import React from "react";
import './collapsible.sass';

const Collapsable_list = () => {

    function create_text_element() { // -> Node // created element
        let e = document.createElement('p');
        e.textContent = "My-test";
        e.className = "styled-content";
        return e
    }

    const unwrap_the_list = (event) => {
        const this_sample = event.target;
        console.log(this_sample.parentNode.lastChild);
        this_sample.parentNode.lastChild.appendChild(create_text_element());
    };

    return (
        <div className="double-collapsible-holder">
            <div className="collapsible-container">
                <button className="collapsible-container__activator" onClick={unwrap_the_list}>Пометки</button>
                <div className="collapsible-container__content">

                </div>
            </div>
            <div className="collapsible-container">
                <button className="collapsible-container__activator" onClick={unwrap_the_list}>Логи</button>
                <div className="collapsible-container__content">

                </div>
            </div>
        </div>
    )
}

export default Collapsable_list;