import {Component} from "react";
import "./list_flex_display.style.sass";

class ListFlexDisplay extends Component {
    constructor() {
        super();
        this.state = {
            active : "collapsible-container__hidden"
        }
    }

    change_visibility = () => {
        this.setState(() => {
            return {
                active : this.state.active === "collapsible-container__content" ? "collapsible-container__hidden" : "collapsible-container__content"
            }
        })
    }
    render() {
        return (
            <div className="collapsible-container">
                <button className="collapsible-container__activator" onClick={
                    this.change_visibility
                }>{this.props.buttonTitle}</button>
                <div className={this.state.active}>
                    {
                        this.props.newElements.map(object => {
                            return (
                                <h1 key={object.uuid} className='styled-content'>{object.text}</h1>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}


export default ListFlexDisplay;