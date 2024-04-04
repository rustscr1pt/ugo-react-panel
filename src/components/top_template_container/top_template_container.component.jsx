import {Component} from "react";
import './top_template_container.style.sass';

class TopTemplateContainer extends Component {
    render() {
        return (
            <div className='top-template-flex-container'>
                <div className='top-template-flex-container__separated'>
                    <span className='top-template-flex-container__span'></span>
                </div>
                <div className='top-template-flex-container__separated'>
                    <span className='top-template-flex-container__span'></span>
                </div>
                <div className='top-template-flex-container__separated'>
                    <span className='top-template-flex-container__span'></span>
                </div>
            </div>
        )
    }
}

export default TopTemplateContainer;