import React, {Component} from "react";
import './list_of_requests.sass';
import Request_template from "../request_template";

// class List_of_requests extends Component {
//     render() {
//         return (
//             <div className='list_of_requests'>
//                 {
//                     this.props.object_vector.map((element) => {
//                         return <Request_template
//                             key={element.id}
//                             displayObject={element}
//                             reload_orders={this.props.reload_orders}
//                         />
//                     })
//                 }
//             </div>
//         )
//     }
// }

const List_of_requests = (props) => {
    return (
        <div className='list_of_requests'>
            {
                props.object_vector.map((element) => {
                    return <Request_template
                        key={element.id}
                        displayObject={element}
                        reload_orders={props.reload_orders}
                    />
                })
            }
        </div>
    )
}

export default List_of_requests;