import React, {Component} from "react";
import './list_of_requests.sass';
import Request_template from "../request_template";

class List_of_requests extends Component {
    render() {
        return (
            <div className='list_of_requests'>
                {
                    this.props.object_vector.map((element) => {
                        return <Request_template displayObject={element}/>
                    })
                }
            </div>
        )
    }
}

export default List_of_requests;