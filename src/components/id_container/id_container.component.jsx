import {Component} from "react";
import './id_container.style.sass';


class IDContainer extends Component {
    render() {
        return (
            <div className='black-id-flex-container'>
                <span className='black-id-flex-container__span'>{this.props.id}</span>
            </div>
        )
    }
}

export default IDContainer;