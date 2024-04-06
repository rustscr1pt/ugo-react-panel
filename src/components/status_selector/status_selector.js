import React, {Component} from "react";
import "./status_selector.sass";

const Status_selector = (props) => {

    function update_status(event) {
        props.handleChanges(event.target.value);
    }

    return (
        <div className='request-grid-holder__status'>
            <select name='order_status'
                    onChange={update_status}
                    id='order_status'>
                <option value="БЕЗ ВНИМАНИЯ">БЕЗ ВНИМАНИЯ</option>
                <option value="ОБРАБОТАН">ОБРАБОТАН</option>
                <option value="ОЖИДАЕТ ОТВЕТА">ОЖИДАЕТ ОТВЕТА</option>
                <option value="ЗАВЕРШЕН">ЗАВЕРШЕН</option>
            </select>
        </div>
    )
}

// class Status_selector extends Component {
//     render() {
//         return (
//             <div className='request-grid-holder__status'>
//                 <select name='order_status'
//                         onChange={this.props.handleChanges}
//                         id='order_status'>
//                     <option value="БЕЗ ВНИМАНИЯ">БЕЗ ВНИМАНИЯ</option>
//                     <option value="ОБРАБОТАН">ОБРАБОТАН</option>
//                     <option value="ОЖИДАЕТ ОТВЕТА">ОЖИДАЕТ ОТВЕТА</option>
//                     <option value="ЗАВЕРШЕН">ЗАВЕРШЕН</option>
//                 </select>
//             </div>
//         )
//     }
// }

export default Status_selector;