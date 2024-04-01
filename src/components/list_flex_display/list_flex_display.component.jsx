import {Component} from "react";
import "./list_flex_display.style.sass";

class ListFlexDisplay extends Component {
    render() {
        return (
            <div className="collapsible-container">
                <button className="collapsible-container__activator">Пометки</button>
                <div className="collapsible-container__content">
                    {
                        this.props.notable.map((object) => {
                            return (
                                <p key={object.id} className='styled-content'>{object.desc}</p>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}


export default ListFlexDisplay;