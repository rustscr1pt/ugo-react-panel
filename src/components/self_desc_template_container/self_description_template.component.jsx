import {Component} from "react";
import './self_description_template.style.sass'

const SelfDescriptionTemplate = (props) => {
    return (
        <div className='middle-template-flex-container'>
            <div className='middle-template-flex-container__separated'>
                <span className='middle-template-flex-container__span'>{props.self}</span>
            </div>
        </div>
    )
}

export default SelfDescriptionTemplate;