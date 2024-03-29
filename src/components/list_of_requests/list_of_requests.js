import React from "react";
import './list_of_requests.sass';
import Request_template from "../request_template";


const List_of_requests = () => {
    return (
        <div className='list_of_requests'>
            <Request_template/>
        </div>
    )
}

export default List_of_requests;