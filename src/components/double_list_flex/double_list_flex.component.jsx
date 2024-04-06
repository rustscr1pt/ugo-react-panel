import {Component} from "react";
import "./double_list_flex.style.sass";
import ListFlexDisplay from "../list_flex_display";

const DoubleListFlex = (props) => {
    return (
        <div className="double-collapsible-holder">
            <ListFlexDisplay newElements={props.notes} buttonTitle="Пометки"/>
            <ListFlexDisplay newElements={props.logs} buttonTitle="Логи"/>
        </div>
    )
}

export default DoubleListFlex;