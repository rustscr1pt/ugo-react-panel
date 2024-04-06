import React, {Component} from "react";
import "./status_selector.sass";

const Status_selector = (props) => {

    function update_status(event) {
        fetch('http://localhost:8000/api/orders/change_status', {
            method : "POST",
            body : JSON.stringify({
                order_id : `${props.object_id}`,
                new_status : `${event.target.value}`
            }),
            headers : {
                "Content-Type" : "application/json"
            }
        })
            .then((response) => response.json())
            .then((json) => {
                if (json.is_succeed) {
                    console.log(json.message);
                    props.reload_orders([]);
                }
                else {
                    console.log(json.message);
                }
            })
            .catch(function(err) {
                console.log(err);
            })
        console.log(event.target.value);
    }

    return (
        <div className='request-grid-holder__status'>
            <select onChange={update_status} value={props.object_value}>
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