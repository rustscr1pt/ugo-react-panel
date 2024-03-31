import {Component} from "react";
import './collapsible.sass';

class Collapsable_list extends Component {
    render() {
        return (
            <div className="double-collapsible-holder">
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
                <div className="collapsible-container">
                    <button className="collapsible-container__activator">Логи</button>
                    <div className="collapsible-container__content">
                        {
                            this.props.logable.map((object) => {
                                return (
                                    <p key={object.id} className='styled-content'>{object.desc}</p>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Collapsable_list;