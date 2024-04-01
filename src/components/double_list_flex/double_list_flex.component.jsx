import {Component} from "react";
import "./double_list_flex.style.sass";
import ListFlexDisplay from "../list_flex_display";

class DoubleListFlex extends Component {
    render() {
        return (
            <div className="double-collapsible-holder">
                <ListFlexDisplay/>
                <ListFlexDisplay/>
            </div>
        )
    }
}

export default DoubleListFlex;