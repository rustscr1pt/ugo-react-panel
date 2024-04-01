import {Component} from "react";
import "./list_flex_display.style.sass";

class ListFlexDisplay extends Component {
    render() {
        return (
            <div className="collapsible-container">
                <button className="collapsible-container__activator" onClick={
                    console.log(this.props.newElements)
                }>{this.props.buttonTitle}</button>
                <div className="collapsible-container__content">
                    {
                        this.props.newElements.map(object => {
                            return (
                                <h1 key={object.id} className='styled-content'>{object.text}</h1>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}


export default ListFlexDisplay;