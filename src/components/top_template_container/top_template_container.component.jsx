import React, {Component} from "react";
import './top_template_container.style.sass';
import Status_selector from "../status_selector";

const TopTemplateContainer = (props) => {
    return (
        <div className='top-template-flex-container'>
            <Status_selector selectedStatus={props.selectedStatus} handleChanges={props.handleChanges}/>
            <div className='top-template-flex-container__separated'>
                <span className='top-template-flex-container__span'>{props.displayObject.customer_name}</span>
            </div>
            <div className='top-template-flex-container__separated'>
                <span className='top-template-flex-container__span'>{props.displayObject.customer_email}</span>
            </div>
            <div className='top-template-flex-container__separated-date'>
                <span className='top-template-flex-container__span'>{props.displayObject.date_time_added}</span>
            </div>
        </div>
    )
}

// class TopTemplateContainer extends Component {
//     render() {
//         return (
//             <div className='top-template-flex-container'>
//                 <Status_selector selectedStatus={this.props.selectedStatus} handleChanges={this.props.handleChanges}/>
//                 <div className='top-template-flex-container__separated'>
//                     <span className='top-template-flex-container__span'>{this.props.displayObject.customer_name}</span>
//                 </div>
//                 <div className='top-template-flex-container__separated'>
//                     <span className='top-template-flex-container__span'>{this.props.displayObject.customer_email}</span>
//                 </div>
//                 <div className='top-template-flex-container__separated-date'>
//                     <span className='top-template-flex-container__span'>{this.props.displayObject.date_time_added}</span>
//                 </div>
//             </div>
//         )
//     }
// }

export default TopTemplateContainer;