import {Component} from "react";

class SelfDescriptionTemplate extends Component {
    render() {
        return (
            <div className='middle-template-flex-container'>
                <div className='middle-template-flex-container__separated'>
                    <span className='middle-template-flex-container__span'>{this.props.self}</span>
                </div>
            </div>
        )
    }
}

export default SelfDescriptionTemplate;