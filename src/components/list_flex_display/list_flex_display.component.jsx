import {Component, useState} from "react";
import "./list_flex_display.style.sass";

const ListFlexDisplay = (props) => {
    const [isActive, setIsActive] = useState("collapsible-container__hidden");
    function change_visibility() {
        setIsActive(isActive === "collapsible-container__content" ? "collapsible-container__hidden" : "collapsible-container__content");
    }

    return (
        <div className="collapsible-container">
            <button
                className="collapsible-container__activator"
                onClick={change_visibility}>{props.buttonTitle}
            </button>
            <div className={isActive}>
                {
                    props.newElements.map(object => {
                        return (
                            <h1 key={object.uuid} className='styled-content'>{object.text}</h1>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default ListFlexDisplay;